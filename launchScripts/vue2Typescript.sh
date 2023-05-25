#!/bin/bash
eval "cd vue2/typescript"
eval "npm install"
eval "node utils/writeKeyVariable"
eval "npm run start &"
