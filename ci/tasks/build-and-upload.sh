#!/bin/bash

set -ex

export BUILD_VERSION=`cat version/number`

pushd repo
    ./gradlew clean assemble -Pversion=$BUILD_VERSION
    echo " >>>> Uploading jar to aws"
    /root/bin/aws s3 cp "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"
    echo " <<<< Uploaded jar to aws"

    pushd frontend
        npm install
        npm run build
    popd

    pushd frontend-server
        cp -r ../frontend/build ./build
    popd

    echo " >>>> Zipping Frontend"
    zip -r frontend-server.zip frontend-server
    echo " <<<< Frontend Zipped"

    echo " >>>> Uploading frontend-server.zip to aws"
    /root/bin/aws s3 cp "./frontend-server.zip" "s3://luke-dapuzzo/app/frontend-server-{BUILD_VERSION}.zip"
    echo " <<<< Uploaded frontend-server.zip to aws"
popd