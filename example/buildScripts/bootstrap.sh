#!/bin/bash

[ ! -d "example/dist" ] && mkdir example/dist
[ ! -d "example/dist/scripts" ] && mkdir example/dist/scripts
[ ! -d "example/dist/img" ] && mkdir example/dist/img
[ ! -d "example/dist/styles" ] && mkdir example/dist/styles
[ ! -d "example/dist/samples" ] && ln -s ../../samples ./example/dist/samples

cp -r ./example/app/index.html ./example/dist/index.html && cp -r ./example/app/img/* ./example/dist/img/
