#!/bin/bash
eval "cd vue3/typescript"
eval "npm install"
eval "node utils/writeKeyVariable"
eval "npm run start &"
