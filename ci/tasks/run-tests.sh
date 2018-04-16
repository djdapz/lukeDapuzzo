#!/bin/bash

set -e

echo "here"

export GRADLE_HOME="/gradle/.gradle"
export GRADLE_USER_HOME="/gradle/.usergradle"
export GRADLE_CACHE="/gradle/cache"

export LUKE_DB_URL=jdbc:postgresql://lukeuser:lukepwd@luke-db:5432/luke-test
export LUKE_DB_USERNAME=lukeuser
export LUKE_DB_PASSWORD=lukepwd

pushd repo
    ./gradlew clean test
popd