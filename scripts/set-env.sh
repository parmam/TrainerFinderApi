#!/bin/bash

# Check if environment argument is provided
if [ -z "$1" ]; then
    echo "Please provide an environment (development, staging, or production)"
    exit 1
fi

# Validate environment argument
case $1 in
    development|staging|production)
        ENV=$1
        ;;
    *)
        echo "Invalid environment. Please use: development, staging, or production"
        exit 1
        ;;
esac

# Copy the appropriate .env file
echo "Setting up $ENV environment..."
cp .env.$ENV .env

# Set execute permissions for the script
chmod +x scripts/set-env.sh

echo "Environment set to $ENV"
echo "You can now run: docker compose -f docker-compose${ENV:+.}${ENV}.yml up --build" 