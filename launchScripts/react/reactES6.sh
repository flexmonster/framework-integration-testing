#!/bin/bash
eval "cd ES6"
eval "npm install"
eval "npm run build"
eval "node ../framework-integration-testing/launchScripts/writeKeyVariable '../../ES6/node_modules/flexmonster/flexmonster.full.js'"
eval "node testsServer/server &"