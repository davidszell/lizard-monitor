#!/bin/bash

rm -rf dist
mkdir dist
cp -R ./{assets,public,utils,views,package-lock.json,package.json,server.js} dist/
tar -cvzf pre-built.tar.gz -C dist .