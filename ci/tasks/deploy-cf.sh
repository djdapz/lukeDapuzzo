#!/usr/bin/env bash

set -e

source repo/ci/tasks/common.sh

export BUILD_VERSION=`cat version/number`

cf login -a api.run.pivotal.io -s $PCF_SPACE -u $PCF_USERNAME -p $PCF_PASSWORD

#################
## push server ##
#################


pushd repo
    /root/bin/aws s3 cp "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"  ./luke.jar
    cf push -p "./luke.jar" -f "./ci/manifests/$PCF_SPACE/server-manifest.yml"
popd

#################
## push client ##
#################

pushd repo
    pushd frontend-server
        /root/bin/aws s3 cp "s3://luke-dapuzzo/app/bundle-${BUILD_VERSION}.js"  ./dist/bundle.js
        cf push -f "../ci/manifests/$PCF_SPACE/client-manifest.yml"
    popd
popd