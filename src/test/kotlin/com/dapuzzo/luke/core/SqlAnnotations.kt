package com.dapuzzo.luke.core

import org.springframework.test.context.jdbc.Sql

@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
annotation class CleanupBefore

@Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = ["classpath:cleanup.sql"])
annotation class CleanupAfter

@CleanupAfter
@CleanupBefore
annotation class Cleanup
