#!/bin/bash
eval "cd vue3/ES6"
eval "npm install"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue3/ES6/node_modules/flexmonster/flexmonster.full.js'"
eval "npm run start &"
