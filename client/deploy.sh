#!/usr/bin/env bash


cf login api.run.pivotal.io -s development
npm run build
cf push