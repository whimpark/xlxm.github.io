#!/bin/bash

message="No commit message!"
message=${1:-$message}

## 
git add .
git commit -m "$message"
git push 
