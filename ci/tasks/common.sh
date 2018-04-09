#!/usr/bin/env bash

GRADLE_HOME="${HOME}/.gradle"
ROOT_FOLDER=$(pwd)
GRADLE_CACHE="${ROOT_FOLDER}/gradle"

test -d $GRADLE_CACHE ! -d $GRADLE_HOME  && ln -s $GRADLE_CACHE $GRADLE_HOME