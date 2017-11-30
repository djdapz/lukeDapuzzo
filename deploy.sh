#!/usr/bin/env bash

./gradlew clean test bootRepackage
cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar
