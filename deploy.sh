#!/usr/bin/env bash

./gradlew clean test bootRepackage
heroku deploy:jar build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar --app luke-dapuzzo
