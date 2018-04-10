#!/usr/bin/env bash

echo "##################"
echo "## gradle cache ##"
echo "##################"
source repo/ci/tasks/common.sh

echo "##################"
echo "##  install cf  ##"
echo "##################"
source repo/ci/tasks/install-cf-cli.sh

echo "##################"
echo "## install npm ##"
echo "##################"
source repo/ci/tasks/install-npm.sh

export BUILD_VERSION=`cat version/number`

#################
## push server ##
#################

pushd repo
    cf login -a api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
    ./gradlew clean bootRepackage

    echo "BUILD_VERSION = ${BUILD_VERSION}"
    cf push -p "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar"
popd

#################
## push client ##
#################

pushd repo
    pushd client
        npm install
        cf login -a api.run.pivotal.io -s development -u $PCF_USERNAME -p $PCF_PASSWORD
        npm run build
        cf push -f ../ci/manifests/dev/client-manifest.yml
    popd
popd