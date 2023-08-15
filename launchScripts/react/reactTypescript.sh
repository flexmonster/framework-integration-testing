#!/bin/bash
eval "cd typescript"
eval "npm install"
eval "npm run build"
eval "node ../framework-integration-testing/launchScripts/writeKeyVariable '../../typescript/node_modules/flexmonster/flexmonster.full.js'"
eval "node testsServer/server &"