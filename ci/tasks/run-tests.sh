#!/bin/bash

set -e

echo "here"

export GRADLE_HOME="/gradle/.gradle"
export GRADLE_USER_HOME="/gradle/.usergradle"
export GRADLE_CACHE="/gradle/cache"

pushd repo
    ./gradlew clean test
popd