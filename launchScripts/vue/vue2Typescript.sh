#!/bin/bash
eval "cd vue2/typescript"
eval "npm install"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue2/typescript/node_modules/flexmonster/flexmonster.full.js'"
eval "npm run start &"
