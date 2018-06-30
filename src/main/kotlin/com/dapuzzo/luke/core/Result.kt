package com.dapuzzo.luke.core

sealed class Result<out V, out E> {
    companion object {
        inline fun <V> of(function: () -> V): Result<V, Exception> {
            return try {
                Success(function.invoke())
            } catch (ex: Exception) {
                ex.printStackTrace()
                Failure(ex)
            }
        }
    }
}

data class Success<out V>(val value: V) : Result<V, Nothing>()

data class Failure<out E>(val value: E) : Result<Nothing, E>()

fun <V, E> Result<V, E>.execute(successHandler: (V) -> Unit, errorHandler: (E) -> Unit) {
    when (this) {
        is Success -> successHandler(this.value)
        is Failure -> errorHandler(this.value)
    }
}


fun <V, E, T> Result<V, E>.getAndMap(successHandler: (V) -> T, errorHandler: (E) -> T): T {
    return when (this) {
        is Success -> successHandler(this.value)
        is Failure -> errorHandler(this.value)
    }
}

inline fun <V, E, U, F> Result<V, E>.map(
        success: (V) -> U,
        failure: (E) -> F
): Result<U, F> = when (this) {
    is Success -> Success(success(value))
    is Failure -> Failure(failure(value))
}


fun <V, E> Result<V, E>.getOrThrow(exception: Throwable): V =
        when (this) {
            is Success -> this.value
            is Failure -> throw exception
        }




fun <V, E, U> Result<V, E>.mapSuccess(success: (V) -> U): Result<U, E> =
        when (this) {
            is Success -> Success(success(this.value))
            is Failure -> this
        }

fun <V, E, F> Result<V, E>.mapFailure(failure: (E) -> F): Result<V, F> =
        when (this) {
            is Success -> this
            is Failure -> Failure(failure(this.value))
        }

fun <V, E, U> Result<V, E>.mapSuccessToResult(success: (V) -> Result<U, E>): Result<U, E> =
        when (this) {
            is Success -> success(this.value)
            is Failure -> this
        }

