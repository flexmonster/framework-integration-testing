#!/bin/bash
eval "curl -sv -m 20 -X OPTIONS -H "Origin: http://localhost:5173" -H "Access-Control-Request-Method: POST" https://olap.flexmonster.com:9500/save"
eval "cd vue2/ES6"
eval "npm install"
eval "node ../../framework-integration-testing/launchScripts/writeKeyVariable '../../vue2/ES6/node_modules/flexmonster/flexmonster.full.js'"
eval "npm run start &"
