#!/bin/bash
eval "npm install"
eval "node ../framework-integration-testing/launchScripts/writeKeyVariable '../../pivot-angular/node_modules/flexmonster/flexmonster.full.js'"
eval "ng serve &"
