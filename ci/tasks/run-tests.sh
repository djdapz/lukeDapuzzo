#!/bin/bash

set -e

export GRADLE_HOME="/gradle/.gradle"
export GRADLE_USER_HOME="/gradle/.usergradle"
export GRADLE_CACHE="/gradle/caches"

export LUKE_DB_URL=jdbc:postgresql://luke-db:5432/luke-test?user=lukeuser&password=lukepwd
export LUKE_DB_USERNAME=lukeuser
export LUKE_DB_PASSWORD=lukepwd

pushd repo
    ./gradlew clean test
    pushd client
        npm install
        npm test
    popd
popd