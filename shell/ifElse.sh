#!/bin/bash

echo "how old are you?"
read AGE
if [[ $AGE -gt 42 ]];
then
    echo "you are old"
else
    echo "you are young"
fi
