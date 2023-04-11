#!/bin/bash
eval "cd ES6"
eval "npm install"
eval "sudo kill -9 `sudo lsof -t -i:3000`"
eval "npm run start &"
