#!/usr/bin/env bash

set -e

export BUILD_VERSION=`cat version/number`

cf login -a api.run.pivotal.io -s $PCF_SPACE -u $PCF_USERNAME -p $PCF_PASSWORD

/root/bin/aws s3 cp "./frontend-server.zip"

/root/bin/aws s3 cp  "s3://luke-dapuzzo/app/frontend-server-{BUILD_VERSION}.zip"  ./frontend-server-build.zip
cf push -f "../ci/manifests/$PCF_SPACE/client-manifest.yml" -p ./frontend-server-build.zip