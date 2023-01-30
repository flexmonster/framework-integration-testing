#!/bin/bash
eval "cd vue2/ES6"
eval "npm install"
eval "npm run start &"
eval "cd ../../vue-integration-testing"
eval "git checkout develop"
eval "npm install"
