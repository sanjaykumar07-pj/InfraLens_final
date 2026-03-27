# InfraLens — Connect the Dots Challenge
## IIT Patna 2025

AI-powered rural infrastructure intelligence — unifies Road, Power, Water and Telecom data for every district in India.

---

## Quick Start (2 commands)

```bash
git clone https://github.com/sanjaykumar07-pj/InfraLens-123.git
cd InfraLens-123
cp .env.example .env
docker-compose up --build
```

Open **http://localhost**

---

## Architecture

All traffic enters through Nginx on port 80. Backend port 8000 is internal-only.

```
[Browser]
    |
    v
[Nginx :80]  ──── / ──────────────▶ frontend static files
    |         ──── /api/* ─────────▶ FastAPI :8000 (internal only)
    |         ──── /storage/* ─────▶ /data/uploads/ (volume)
    |         ──── /districts ─────▶ FastAPI :8000
    |         ──── /district/{id} ─▶ FastAPI :8000
```

Backend is never exposed to the public internet — only Nginx is.

---

## Required Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check — returns `status: ok` |
| POST | /api/metadata | Store metadata (title, description, filePath) |
| GET | /api/metadata | Get all stored metadata |
| POST | /api/upload-file | Upload a file to storage |
| GET | /api/get-file?filename=X | Retrieve a stored file |
| GET | /districts | All districts with ML scores |
| GET | /district/{id} | Single district detail |
| POST | /api/predict | ML gap score prediction |

---

## Test Commands

```bash
# Run all integration tests
bash test_api.sh

# Individual tests:

# Health Check
curl http://localhost/api/health

# Store Metadata
curl -X POST http://localhost/api/metadata \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","description":"Test district","filePath":"/storage/test.pdf"}'

# Get Metadata
curl http://localhost/api/metadata

# Upload File
curl -X POST http://localhost/api/upload-file -F "file=@test.pdf"

# Get File (use filename from upload response)
curl http://localhost/api/get-file?filename=<returned-filename>

# Districts
curl http://localhost/districts

# Single District
curl http://localhost/district/1

# Auto-generate API docs (Swagger UI)
# Open: http://localhost/api/docs   ← NOTE: only works if nginx proxy_pass /api/docs is set
```

---

## Project Structure

```
infralens/
├── docker-compose.yml          Orchestrates all services
├── .env.example                Environment variable template
├── .gitignore                  Git ignore rules
├── README.md                   This file
├── ENGINEERING_REPORT.md       Architecture justification
├── test_api.sh                 Integration test script
│
├── nginx/
│   └── nginx.conf              Reverse proxy configuration
│
├── backend/
│   ├── app.py                  FastAPI — all endpoints
│   ├── Dockerfile              Backend container
│   └── requirements.txt        Python dependencies
│
└── frontend/
    ├── index.html              Landing page with 3D animation
    ├── dashboard.html          Interactive map dashboard
    ├── analytics.html          Full analytics
    ├── predict.html            AI predictor
    ├── about.html              About page
    ├── contact.html            Contact page
    ├── login.html              Authentication
    ├── signup.html             Registration
    ├── profile.html            User profile
    ├── shared.css              Design system / global styles
    └── districts_data.js       Static fallback dataset
```

---

## Services

| Service | Image | Port | Exposed |
|---------|-------|------|---------|
| nginx | nginx:alpine | 80 | ✅ Public |
| backend | python:3.11-slim | 8000 | ❌ Internal only |

---

## Scoring Formula

```
Score = (Road × 0.30) + (Power × 0.25) + (Water × 0.25) + (Telecom × 0.20)
```

Severity:
- **Critical** → score < 40
- **Moderate** → 40 ≤ score < 70
- **Good** → score ≥ 70

---

## Assumptions

- Frontend fallback: if the API is unreachable, `districts_data.js` is loaded client-side so the dashboard still renders
- Metadata is persisted to `/data/metadata.json` inside a named Docker volume — survives container restarts
- Uploaded files are stored in `/data/uploads/` and served via Nginx at `/storage/<filename>`
- No database container needed — JSON file storage is sufficient for hackathon scope and saves ~200MB RAM

---

Built for India's rural future.
IIT Patna — Connect the Dots 2025
