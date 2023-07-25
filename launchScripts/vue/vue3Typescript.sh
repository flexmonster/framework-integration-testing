#!/bin/bash
eval "cd vue3/typescript"
eval "npm install"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue3/typescript/node_modules/flexmonster/flexmonster.full.js'"
eval "npm run start &"
