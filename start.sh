#!/usr/bin/env bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
cd "$(dirname "$0")/.next/standalone"
export NODE_ENV=production
export PORT=20128
export HOSTNAME=0.0.0.0
export DATA_DIR=/Users/diegoaraujo/.9router/data
export JWT_SECRET=c989401e791102384ac009ff494b9b3b89a0d0a8417e5d4128f6857af0359d19
export INITIAL_PASSWORD=dimome092526
export REQUIRE_API_KEY=false
export NEXT_TELEMETRY_DISABLED=1
exec node custom-server.js
