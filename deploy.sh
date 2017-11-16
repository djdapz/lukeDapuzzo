#!/usr/bin/env bash

npm run build
./gradlew clean test bootRepackage
cf push luke-dapuzzo -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar
