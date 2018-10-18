#!/bin/bash

set -e

pushd repo
    pushd frontend
        npm install
        CI=true npm test
    popd
popd