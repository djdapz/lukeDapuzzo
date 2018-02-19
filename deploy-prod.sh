#!/usr/bin/env bash


cf login -s production

./gradlew clean  bootRepackage

cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar -f manifest-prod.yml
