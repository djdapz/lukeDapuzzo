#!/usr/bin/env bash


cf login api.run.pivotal.io -s production
npm run build
cf push -f manifest-prod.yml