#!/bin/bash
eval "cd ES6"
eval "npm install"
eval "npm run build"
eval "node testsServer/writeKeyVariable"
eval "node testsServer/server &"
