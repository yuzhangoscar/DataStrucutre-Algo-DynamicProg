#!/bin/bash

function generate_random_chars() {
    LC_ALL=C tr -dc "A-Za-z0-9" < /dev/urandom | head -c $1
}

generate_random_chars "$1"
