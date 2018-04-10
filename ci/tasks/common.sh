#!/usr/bin/env bash

GRADLE_HOME="${HOME}/.gradle"
ROOT_FOLDER=$(pwd)
GRADLE_CACHE="${ROOT_FOLDER}/gradle"

if [ "$GRADLE_CACHE" != "$GRADLE_HOME" ]
    echo "HERE"
    echo "HERE"
    echo "HERE"
    then ln -s $GRADLE_CACHE $GRADLE_HOME
fi

echo GRADLE_CACHE
echo $GRADLE_CACHE
echo GRADLE_HOME
echo $GRADLE_HOME