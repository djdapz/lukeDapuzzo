#!/usr/bin/env bash

pushd frontend
    npm run build
popd

pushd frontend-server
    rm -rf build
    cp ../frontend/build ./build
    cf push -f ../ci/manifests/production/client-manifest.yml
popd
