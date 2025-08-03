#!/bin/bash

echo "🧼 Cleaning existing .vercel config..."
rm -rf .vercel

echo "🔗 Linking to Vercel project..."

vercel link --project 404notfont \
  --token MLHEuGVTlILk4r0YtX5iusbK \
  --yes

echo "🚀 Deploying to Production..."

vercel --prod \
  --token MLHEuGVTlILk4r0YtX5iusbK \
  --confirm