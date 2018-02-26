#!/usr/bin/env bash


cf login api.run.pivotal.io -s development -u $PCF_USERNAME
npm run build
cf push