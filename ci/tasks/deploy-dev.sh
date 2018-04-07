#!/usr/bin/env bash

source repo/ci/tasks/common.sh

source repo/ci/tasks/install-linux-brew.sh
source repo/ci/tasks/install-npm.sh
source repo/ci/tasks/install-cf-cli.sh

#################
## push server ##
#################

cd repo

cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
./gradlew clean bootRepackage
cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar

#################
## push client ##
#################

cd client
npm install
cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
npm run build
cf push -f ../ci/manifests/dev/client-manifest.yml