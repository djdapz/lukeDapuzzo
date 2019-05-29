#!/usr/bin/env bash
set -e

cd repo

pwd

env

./gradlew clean test
