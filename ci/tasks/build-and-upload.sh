#!/bin/bash

set -e

source repo/ci/tasks/common.sh

export BUILD_VERSION=`cat version/number`

pushd repo
    ./gradlew clean assemble -Pversion=$BUILD_VERSION
    /root/bin/aws s3 cp "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"
    pushd frontend
        npm install
        npm run build
        /root/bin/aws s3 cp "./dist/bundle.js" "s3://luke-dapuzzo/app/bundle-${BUILD_VERSION}.js"
    popd
popd