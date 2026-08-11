#!/usr/bin/env bash
# =============================================================================
# deploy-live.sh – run this from the repository root
# =============================================================================
# Resolves "Backend unreachable" by:
#   1. Creating render.yaml (if missing)
#   2. Committing and pushing it
#   3. Rebuilding the frontend with a live backend URL
#   4. Redeploying to GitHub Pages
# =============================================================================

set -euo pipefail

# -----------------------------------------------------------------------------
# Ensure we are in a git repository
# -----------------------------------------------------------------------------
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "ERROR: Not inside a Git repository."
  echo "Please cd into your repo root and re-run this script."
  exit 1
fi

echo "======================================================================"
echo "Step 1: Ensure render.yaml exists and is pushed"
echo "======================================================================"

# Create render.yaml if missing
if [ ! -f render.yaml ]; then
  cat > render.yaml <<'RENDER'
services:
  - type: web
    name: solar-nostoc-backend
    runtime: python
    repo: https://github.com/swipswaps/solar-nostoc-cad-bridge
    plan: free
    region: oregon
    buildCommand: pip install -r backend/requirements.txt
    startCommand: uvicorn backend.main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: PYTHONUNBUFFERED
        value: 1
RENDER
  echo "✅ render.yaml created."
fi

# Stage, commit, and push it if not already tracked
if ! git ls-files --error-unmatch render.yaml >/dev/null 2>&1; then
  git add render.yaml
  git commit -m "add render.yaml for backend deployment"
else
  echo "render.yaml is already tracked."
fi

# Push to main
git push origin main

echo "======================================================================"
echo "Step 2: Deploy the backend to Render (or use ngrok)"
echo "======================================================================"
echo ""
echo "To deploy to Render:"
echo "  1. Go to https://render.com and sign in."
echo "  2. Click 'New +' → 'Web Service'."
echo "  3. Connect your GitHub repository (swipswaps/solar-nostoc-cad-bridge)."
echo "  4. Render will auto-detect render.yaml – confirm the settings."
echo "  5. Click 'Create Web Service'."
echo ""
echo "   After deployment, Render gives you a URL like:"
echo "   https://solar-nostoc-backend.onrender.com"
echo ""
echo "Alternative: use ngrok to expose your local backend temporarily:"
echo "   ngrok http 8000  (gives a URL like https://abc123.ngrok.io)"
echo ""

read -p "Enter your live backend URL: " BACKEND_URL
if [ -z "$BACKEND_URL" ]; then
  echo "ERROR: No URL provided. Exiting."
  exit 1
fi

echo "======================================================================"
echo "Step 3: Rebuild and redeploy the frontend with the new backend URL"
echo "======================================================================"

# Create redeploy-frontend.sh if missing (embed it here)
if [ ! -f redeploy-frontend.sh ]; then
  cat > redeploy-frontend.sh <<'REDEPLOY'
#!/usr/bin/env bash
set -euo pipefail
BACKEND_URL="${1:-}"
if [ -z "$BACKEND_URL" ]; then
  read -p "Enter your live backend URL: " BACKEND_URL
fi
if [ -z "$BACKEND_URL" ]; then
  echo "ERROR: No backend URL provided."
  exit 1
fi
echo "Using backend URL: $BACKEND_URL"

git checkout main || git checkout -b main
git pull origin main --rebase || echo "Pull failed, continuing..."

echo "Building frontend with VITE_API_BASE_URL=$BACKEND_URL"
VITE_API_BASE_URL="$BACKEND_URL" npm run build

if [ ! -d "dist" ]; then
  echo "ERROR: Build failed – dist folder not found."
  exit 1
fi

cp .gitignore /tmp/.gitignore.$$
git checkout -B gh-pages
git rm -rf .
mv /tmp/.gitignore.$$ .gitignore
cp -r dist/* .
git add .
git commit -m "deploy: frontend with backend URL $BACKEND_URL"
git push origin gh-pages --force

echo "✅ Frontend redeployed with backend URL: $BACKEND_URL"
REDEPLOY
  chmod +x redeploy-frontend.sh
  echo "✅ redeploy-frontend.sh created."
fi

./redeploy-frontend.sh "$BACKEND_URL"

echo "======================================================================"
echo "✅ All done!"
echo "Your live site is now pointing to: $BACKEND_URL"
echo "Visit: https://swipswaps.github.io/solar-nostoc-cad-bridge/"
echo "======================================================================"
