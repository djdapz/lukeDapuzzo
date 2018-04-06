#!/usr/bin/env sh

wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
apt-get update
apt-get install cf-cli

#################
## push server ##
#################

cd repo

cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
./gradlew clean test bootRepackage
cf push -p build/libs/lukeDapuzzo-0.0.1-SNAPSHOT.jar

#################
## push client ##
#################

cd client

cf login api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
npm run build
cf push -f ../ci/manifests/dev/client-manifest.yml