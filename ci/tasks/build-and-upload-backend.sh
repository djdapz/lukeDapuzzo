#!/bin/bash

set -ex

export BUILD_VERSION=`cat version/number`

pushd repo
    ./gradlew clean assemble -Pversion=$BUILD_VERSION
    echo " >>>> Uploading jar to aws"
    /root/bin/aws s3 cp "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"
    echo " <<<< Uploaded jar to aws"
popd