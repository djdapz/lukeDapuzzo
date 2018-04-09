#!/usr/bin/env bash

wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | apt-key add -
apt-get update
apt-get install cf-cli