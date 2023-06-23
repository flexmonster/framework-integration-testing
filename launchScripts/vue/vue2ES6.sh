#!/bin/bash
eval "cd vue2/ES6"
eval "npm install"
eval "node --max_old_space_size=1096 node_modules/.bin/vite build"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue2/ES6/node_modules/flexmonster/flexmonster.full.js'"
eval "node testsServer/server &"
