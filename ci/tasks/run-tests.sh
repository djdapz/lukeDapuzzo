#!/usr/bin/env bash
set -e

cd repo

pwd

env

export LUKE_DB_URL=jdbc:postgresql://luke-db:5432/luke-test
export LUKE_DB_PASSWORD=lukeuser
export LUKE_DB_USERNAME=lukepwd

./gradlew clean test
