#!/usr/bin/env bash

./graldew clean assemble
cf push -f ci/manifests/production/server-manifest.yml -p build/libs/luke-dapuzzo-unspecified.jar
