#!/usr/bin/env bash


cf login -s production
npm run build
cf push -f manifest-prod.yml