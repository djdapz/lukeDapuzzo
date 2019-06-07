package com.dapuzzo.luke.security

import com.dapuzzo.luke.core.*
import com.dapuzzo.luke.core.Result.Companion.of
import com.dapuzzo.luke.security.SecurityRepository.Companion.DUPLICATE_USER_MESSAGE
import com.dapuzzo.luke.security.SecurityRepository.Companion.UNAUTHORIZED_MESSAGE
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Repository
import java.sql.ResultSet
import kotlin.random.Random


@Repository
class SecurityRepositoryImpl(jdbcTemplate: JdbcTemplate, val passwordEncoder: PasswordEncoder) : SecurityRepository {


    val namedParameterJdbcTemplate = NamedParameterJdbcTemplate(jdbcTemplate)

    override fun createAccount(credentials: Credentials): Result<Account, LukeException> = of {
        namedParameterJdbcTemplate.update(
            "INSERT INTO account (username, password) VALUES(:username, :password)",
            MapSqlParameterSource()
                .addValue("username", credentials.username)
                .addValue("password", passwordEncoder.encode(credentials.password))
        )
    }
        .getAndMap(
            { getUser(credentials) },
            { Failure(LukeException(DUPLICATE_USER_MESSAGE)) }
        )


    override fun login(credentials: Credentials): Result<Account, LukeException> =
        of {
            namedParameterJdbcTemplate.query(
                "SELECT * FROM account WHERE username = :username",
                MapSqlParameterSource()
                    .addValue("username", credentials.username)
                ,
                rsToCredentials
            ).first()
        }.getAndMap(
            { validatePassword(it, credentials) },
            { Failure(LukeException(UNAUTHORIZED_MESSAGE)) }
        ).getAndMap(
            getUser,
            { Failure(LukeException(UNAUTHORIZED_MESSAGE)) }
        )

    private fun validatePassword(it: Credentials, credentials: Credentials): Result<Credentials, LukeException> {
        if (passwordEncoder.matches(credentials.password, it.password)) {
            return Success(it)
        }
        return Failure(LukeException(UNAUTHORIZED_MESSAGE))
    }

    val rsToAccount: (ResultSet, Int) -> Account = { rs, _ ->
        Account(
            username = rs.getString("username"),
            role = Role.valueOf(rs.getString("role"))
        )
    }

    val rsToCredentials: (ResultSet, Int) -> Credentials = { rs, _ ->
        Credentials(
            username = rs.getString("username"),
            password = rs.getString("password")
        )
    }

    val getUser: (Credentials) -> Result<Account, LukeException> = {
        of {
            namedParameterJdbcTemplate.query(
                "SELECT * FROM account WHERE username = :username",
                MapSqlParameterSource().addValue("username", it.username),
                rsToAccount
            ).first()
        }.mapFailure { LukeException(it.message ?: "Error mapping account") }
    }
}

