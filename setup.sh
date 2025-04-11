#!/bin/bash

node -v > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "Node.js is installed. Version: $(node -v)"
  PATH_PROJECT=$(pwd)

  if [ -d "$PATH_PROJECT/node_modules" ]; then
    echo "Node modules are installed"
  else
    echo "Project has not been installed. Installing..."
    npm install
    echo "Node modules installed perfectly"
  fi
else 
  echo "Node.js is not installed in your computer. Please download and re-run this script"
fi