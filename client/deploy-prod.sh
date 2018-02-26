#!/usr/bin/env bash


cf login api.run.pivotal.io -s production -u $PCF_USERNAME
npm run build
cf push -f manifest-prod.yml