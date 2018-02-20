#!/usr/bin/env bash


cf login -s development
npm run build
cf push