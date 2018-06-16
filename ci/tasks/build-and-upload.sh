#!/bin/bash

set -e

source repo/ci/tasks/common.sh

export BUILD_VERSION=`cat version/number`

cd repo
./gradlew clean assemble -Pversion=$BUILD_VERSION
echo " >>>> Uploading jar to aws"
/root/bin/aws s3 cp "build/libs/luke-dapuzzo-${BUILD_VERSION}.jar" "s3://luke-dapuzzo/app/luke-dapuzzo-${BUILD_VERSION}.jar"
echo " <<<< Uploaded jar to aws"

cd frontend
npm install
npm run build

echo " >>>> Uploading bundle.js to aws"
/root/bin/aws s3 cp "./dist/bundle.js" "s3://luke-dapuzzo/app/bundle-${BUILD_VERSION}.js"
echo " <<<< Uploaded bundle.js to aws"
