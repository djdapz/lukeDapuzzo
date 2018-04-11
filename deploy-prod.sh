#!/usr/bin/env bash


cf login api.run.pivotal.io -s production -u $PCF_USERNAME

./gradlew clean  bootRepackage

cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar -f manifest-prod.yml