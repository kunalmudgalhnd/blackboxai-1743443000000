#!/bin/bash

# Verify project directory exists
if [ ! -d "blinkit-clone" ]; then
  echo "Error: blinkit-clone directory not found"
  exit 1
fi

# Move all source files
mv src/ blinkit-clone/src/ || echo "Failed to move src/"
mv tailwind.config.js blinkit-clone/ || echo "Failed to move tailwind.config.js"
mv postcss.config.js blinkit-clone/ || echo "Failed to move postcss.config.js"

# Verify critical files
if [ ! -f "blinkit-clone/src/main.jsx" ]; then
  echo "Warning: React entry point missing - may need to recreate"
fi

echo "File organization complete. Run:"
echo "cd blinkit-clone && npm run dev"