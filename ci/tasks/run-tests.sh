#!/bin/bash

set -e

source repo/ci/tasks/common.sh

export LUKE_DB_URL="jdbc:postgresql://luke-db:5432/luke-test?user=lukeuser&password=lukepwd"
export LUKE_DB_USERNAME=lukeuser
export LUKE_DB_PASSWORD=lukepwd

pushd repo
    ./gradlew clean test
    pushd client
        npm install
        npm test
    popd
popd