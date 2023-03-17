#!/bin/bash
eval "sudo kill -9 `sudo lsof -t -i:5173`"
eval "sudo kill -9 `sudo lsof -t -i:9515`"