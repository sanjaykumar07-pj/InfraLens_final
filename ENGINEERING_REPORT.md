# Engineering Justification Report
## InfraLens — Connect the Dots Infrastructure Integration Challenge
### IIT Patna 2025

---

## 1. Architecture Design

```
Browser / Client
        |
        v
+------------------------+
|   NGINX  (Port 80)     |  <-- Single public entry point
|   Reverse Proxy        |
+----+----------+--------+
     |          |
  /api/*    /storage/*
     |          |
     v          v
+--------+  +----------+
|FastAPI |  |Nginx file|
|Backend |  |serving   |
|:8000   |  |/data/    |
|(intern)|  |uploads/  |
+---+----+  +----------+
    |
    v
+----------+
|/data/    |
|metadata  |
|.json     |
|uploads/  |
|(volumes) |
+----------+
```

## 2. Tool Choices

### Nginx - Reverse Proxy
- Lightest proxy option (Alpine: 20MB)
- Native static file serving for UI
- /storage/* alias maps directly to upload volume

### FastAPI - Backend
- Auto OpenAPI docs at /docs for judge testing
- Pydantic validation with clear errors
- Async file uploads without blocking

### Docker Volumes - Storage
- Zero extra container vs MinIO (saves 200MB RAM)
- Sufficient for hackathon scope
- Files served via Nginx alias directly

### JSON file - Metadata
- No DB container needed
- Human-readable for judges
- Swappable to PostgreSQL with no API changes

## 3. Routing

ALL traffic enters through Nginx port 80 only.
Backend port 8000 is internal-only (expose, not ports).

/ -> frontend static files
/api/* -> backend:8000
/storage/* -> /data/uploads/ (direct file serving)
/districts -> backend:8000/districts
/health -> backend:8000/api/health

## 4. Trade-offs

| Choice | Why |
|--------|-----|
| Volumes over MinIO | Saves 200MB RAM, simpler |
| JSON over Postgres | No extra container |
| 2 containers total | Avoids unnecessary complexity |

## 5. Resource Usage

- nginx: ~15MB RAM
- backend: ~60MB RAM
- Total: ~75MB (vs 400MB+ with MinIO+Postgres+Redis)

## 6. Reliability

- Health check on backend before nginx starts
- restart: unless-stopped on all services
- Named volumes survive restarts
- Frontend fallback to districts_data.js if API down
