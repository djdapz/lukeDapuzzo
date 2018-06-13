#!/bin/bash

set -e

export GRADLE_HOME="/gradle/.gradle"
export GRADLE_USER_HOME="/gradle/.usergradle"
export GRADLE_CACHE="/gradle/caches"

export BUILD_VERSION=`cat version/number`

mkdir "~/.aws"

pushd repo
    ./gradlew clean assemble -Pversion=$BUILD_VERSION
    aws s3 cp "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"
    pushd client
        npm install
        npm run build
        aws s3 cp "./dist/bundle.js" "s3://luke-dapuzzo/app/bundle-${BUILD_VERSION}.js"
    popd
popd