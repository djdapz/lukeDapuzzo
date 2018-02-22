#!/usr/bin/env bash

cf login api.run.pivotal.io -s development
./gradlew clean test bootRepackage
cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar
