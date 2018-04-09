#!/usr/bin/env bash

wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install cf-cli