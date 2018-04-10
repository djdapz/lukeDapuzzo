#!/usr/bin/env bash

GRADLE_HOME="${HOME}/.gradle"
ROOT_FOLDER=$(pwd)
GRADLE_CACHE="${ROOT_FOLDER}/gradle"

if [ "$GRADLE_CACHE" != "$GRADLE_HOME" ];
    then
        echo "HERE"
        echo "HERE"
        echo "HERE"
        ln -s $GRADLE_CACHE $GRADLE_HOME
     else
        echo "SAD"
        echo "SAD"
        echo "SAD"
        echo "SAD"
fi

echo GRADLE_CACHE
echo $GRADLE_CACHE
echo GRADLE_HOME
echo $GRADLE_HOME