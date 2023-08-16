#!/bin/bash
eval "cd ./framework-integration-testing"
eval "npm install"
eval "npm install chromedriver"
eval "npm run test-vue"
