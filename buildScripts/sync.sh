#!/bin/bash

rsync -avh -e 'ssh' ./server root@192.168.1.169:/root/planetCounterServer
