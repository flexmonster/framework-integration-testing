#!/bin/bash
eval "cd ./framework-integration-testing"
eval "npm install"
eval "npm run test-vue"
eval "npm run test-vue-compositionAPI"