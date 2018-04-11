#!/usr/bin/env bash

source repo/ci/tasks/common.sh

export BUILD_VERSION=`cat version/number`

cf login -a api.run.pivotal.io -s $PCF_SPACE -u $PCF_USERNAME -p $PCF_PASSWORD

#################
## push server ##
#################

pushd repo
    ./gradlew clean bootRepackage -Pversion=$BUILD_VERSION

    echo "BUILD_VERSION = ${BUILD_VERSION}"
    cf push -p "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" -f "./ci/manifests/$PCF_SPACE/server-manifest.yml"
popd

#################
## push client ##
#################

pushd repo
    pushd client
        npm install
        npm run build
        cf push -f "../ci/manifests/$PCF_SPACE/client-manifest.yml"
    popd
popd