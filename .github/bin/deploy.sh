#!/bin/bash
# for github workflow

## install and build
npm install
npm run build

echo "<meta http-equiv=\"Refresh\" content=\"url=./web/home/\">" >./dist/index.html

