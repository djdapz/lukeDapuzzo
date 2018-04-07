#!/usr/bin/env bash

pwd
curl -sL https://deb.nodesource.com/setup_8.x |  bash -
apt-get install -y nodejs

npm -v
#wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | apt-key add -
#echo "deb https://packages.cloudfoundry.org/debian stable main" | tee /etc/apt/sources.list.d/cloudfoundry-cli.list
#apt-get update
#apt-get install cf-cli

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

cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
npm run build
cf push -f ../ci/manifests/dev/client-manifest.yml