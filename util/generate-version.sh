#!/bin/bash

NAME=`cat package.json | egrep -o '"name": (.*)"' | sed 's/"//g' | sed 's/name: //g'`
VERSION=`git tag --sort=committerdate | grep '^[0-9]' | tail -1`
COMMIT=`git rev-list $VERSION -n 1`

echo "export const version = {
  name: '$NAME',
  version: '$VERSION',
  commit: '$COMMIT',
};" > src/version.ts

