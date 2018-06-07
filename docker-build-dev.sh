#!/bin/bash

cd ./services/ui
docker build -t aws-ecs-demo-ui:latest .

cd ../api
docker build -t aws-ecs-demo-api:latest .
