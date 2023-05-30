#!/bin/bash
eval "npm install"
eval "node ./framework-integration-testing/launchScripts/writeKeyVariable '../../node_modules/flexmonster/flexmonster.full.js'"
eval "ng serve &"
