#!/usr/bin/env bash
set -e

GRADLE_HOME="${HOME}/.gradle"
ROOT_FOLDER=$(pwd)
GRADLE_CACHE="${ROOT_FOLDER}/gradle"

if [ "$GRADLE_CACHE" != "$GRADLE_HOME" ];
    then
        ln -s $GRADLE_CACHE $GRADLE_HOME
fi

cd HOME
ls -lsa


export LUKE_DB_URL="jdbc:postgresql://luke-db:5432/luke-test?user=lukeuser&password=lukepwd"
export LUKE_DB_PASSWORD=lukeuser
export LUKE_DB_USERNAME=lukepwd

env
cd repo

./gradlew clean test
