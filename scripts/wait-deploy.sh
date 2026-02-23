#!/bin/bash
COMMIT=$(git rev-parse --short HEAD)
echo "Waiting for $COMMIT to deploy..."
while true; do
    if wrangler pages deployment list --project-name website 2>&1 | grep -q "$COMMIT"; then
        echo "Deployed: $COMMIT"
        break
    fi
    sleep 10
done
