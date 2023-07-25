#!/bin/bash
eval "npm install"
eval "ng build"
eval "node ./framework-integration-testing/launchScripts/writeKeyVariable '../../node_modules/flexmonster/flexmonster.full.js'"
eval "node testsServer/server &"
