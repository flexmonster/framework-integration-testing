#!/bin/bash
eval "cd nextjs-ts"
eval "npm install"
eval "node ../framework-integration-testing/launchScripts/writeKeyVariable '../../nextjs-ts/node_modules/flexmonster/flexmonster.full.js'"
eval "npm run build"
eval "npm run prod &"