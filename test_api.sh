#!/bin/bash
# InfraLens API Test Script
# Run after: docker-compose up --build
# Usage: bash test_api.sh

BASE=http://localhost
GREEN=$'[0;32m'
RED=$'[0;31m'
NC=$'[0m'

pass() { echo "${GREEN}PASS${NC} $1"; }
fail() { echo "${RED}FAIL${NC} $1"; }

echo ""
echo "======================================"
echo "  InfraLens API Integration Tests"
echo "======================================"
echo ""

# 1. Health Check
echo "[1] GET /api/health"
R=$(curl -s $BASE/api/health)
echo "$R" | grep -q '"ok"' && pass "Health check" || fail "Health check - got: $R"

# 2. POST Metadata
echo ""
echo "[2] POST /api/metadata"
R=$(curl -s -X POST $BASE/api/metadata \
  -H "Content-Type: application/json" \
  -d '{"title":"Test District","description":"Integration test","filePath":"/storage/test.pdf"}')
echo "$R" | grep -q '"Metadata stored"' && pass "Store metadata" || fail "Store metadata - got: $R"

# 3. GET Metadata
echo ""
echo "[3] GET /api/metadata"
R=$(curl -s $BASE/api/metadata)
echo "$R" | grep -q '"count"' && pass "Get metadata" || fail "Get metadata - got: $R"

# 4. Upload File
echo ""
echo "[4] POST /api/upload-file"
echo "test content" > /tmp/test_upload.txt
R=$(curl -s -X POST $BASE/api/upload-file -F "file=@/tmp/test_upload.txt")
echo "$R" | grep -q '"filename"' && pass "Upload file" || fail "Upload file - got: $R"
FNAME=$(echo "$R" | python3 -c "import sys,json; print(json.load(sys.stdin)['filename'])" 2>/dev/null)

# 5. Get File
echo ""
echo "[5] GET /api/get-file"
if [ -n "$FNAME" ]; then
  R=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/get-file?filename=$FNAME")
  [ "$R" = "200" ] && pass "Get file (HTTP $R)" || fail "Get file - HTTP $R"
else
  fail "Get file - could not get filename from upload"
fi

# 6. Districts
echo ""
echo "[6] GET /districts"
R=$(curl -s $BASE/districts)
echo "$R" | grep -q '"name"' && pass "Districts list" || fail "Districts list - got: ${R:0:100}"

# 7. Single District
echo ""
echo "[7] GET /district/1"
R=$(curl -s $BASE/district/1)
echo "$R" | grep -q '"score"' && pass "Single district" || fail "Single district - got: $R"

echo ""
echo "======================================"
echo "  Tests complete"
echo "======================================"
echo ""
