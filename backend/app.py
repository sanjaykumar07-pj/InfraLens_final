from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
from typing import Optional
import os, json, shutil, uuid
from datetime import datetime

app = FastAPI(title="InfraLens API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── STORAGE PATHS ─────────────────────────────────────────
METADATA_FILE = "/data/metadata.json"
UPLOAD_DIR    = "/data/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# ── LOAD / SAVE METADATA ──────────────────────────────────
def load_metadata():
    if os.path.exists(METADATA_FILE):
        with open(METADATA_FILE, "r") as f:
            return json.load(f)
    return []

def save_metadata(data):
    os.makedirs(os.path.dirname(METADATA_FILE), exist_ok=True)
    with open(METADATA_FILE, "w") as f:
        json.dump(data, f, indent=2)

# ── MODELS ────────────────────────────────────────────────
class MetadataIn(BaseModel):
    title: str
    description: str
    filePath: Optional[str] = ""

# ══════════════════════════════════════════════════════════
# REQUIRED CHALLENGE ENDPOINTS
# ══════════════════════════════════════════════════════════

# 1. Health Check
@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "InfraLens API", "timestamp": datetime.utcnow().isoformat()}

# 2. Store Metadata
@app.post("/api/metadata")
def post_metadata(item: MetadataIn):
    records = load_metadata()
    record = {
        "id": str(uuid.uuid4()),
        "title": item.title,
        "description": item.description,
        "filePath": item.filePath,
        "createdAt": datetime.utcnow().isoformat()
    }
    records.append(record)
    save_metadata(records)
    return {"message": "Metadata stored", "data": record}

# 3. Retrieve Metadata
@app.get("/api/metadata")
def get_metadata():
    records = load_metadata()
    return {"count": len(records), "data": records}

# 4. Upload File
@app.post("/api/upload-file")
async def upload_file(file: UploadFile = File(...)):
    ext      = os.path.splitext(file.filename)[1]
    filename = f"{uuid.uuid4()}{ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)
    with open(filepath, "wb") as f:
        shutil.copyfileobj(file.file, f)
    return {
        "message": "File uploaded successfully",
        "filename": filename,
        "originalName": file.filename,
        "filePath": f"/storage/{filename}",
        "size": os.path.getsize(filepath)
    }

# 5. Retrieve File
@app.get("/api/get-file")
def get_file(filename: str):
    filepath = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(filepath, filename=filename)

# ══════════════════════════════════════════════════════════
# INFRALENS DISTRICT ENDPOINTS
# ══════════════════════════════════════════════════════════

DISTRICTS = [
  {"id":1,"name":"Sheohar","state":"Bihar","lat":26.5194,"lng":85.2983,"road":18,"power":24,"water":21,"telecom":15,"pop":656916},
  {"id":2,"name":"Araria","state":"Bihar","lat":26.1483,"lng":87.4700,"road":22,"power":31,"water":19,"telecom":18,"pop":2811569},
  {"id":3,"name":"Supaul","state":"Bihar","lat":26.1234,"lng":86.6032,"road":25,"power":28,"water":22,"telecom":20,"pop":2279049},
  {"id":4,"name":"Madhepura","state":"Bihar","lat":25.9181,"lng":86.7927,"road":28,"power":33,"water":25,"telecom":22,"pop":1994618},
  {"id":5,"name":"Sitamarhi","state":"Bihar","lat":26.5926,"lng":85.4887,"road":24,"power":29,"water":20,"telecom":19,"pop":3423574},
  {"id":6,"name":"Kishanganj","state":"Bihar","lat":26.0994,"lng":87.9526,"road":26,"power":30,"water":23,"telecom":21,"pop":1690400},
  {"id":7,"name":"Purnia","state":"Bihar","lat":25.7771,"lng":87.4753,"road":30,"power":35,"water":27,"telecom":24,"pop":3264619},
  {"id":8,"name":"Katihar","state":"Bihar","lat":25.5375,"lng":87.5758,"road":29,"power":34,"water":26,"telecom":23,"pop":3068149},
  {"id":9,"name":"Madhubani","state":"Bihar","lat":26.3583,"lng":86.0746,"road":27,"power":32,"water":24,"telecom":20,"pop":4487379},
  {"id":10,"name":"Darbhanga","state":"Bihar","lat":26.1520,"lng":85.8974,"road":32,"power":38,"water":28,"telecom":26,"pop":3937385},
  {"id":11,"name":"Pakur","state":"Jharkhand","lat":24.6355,"lng":87.8455,"road":28,"power":35,"water":29,"telecom":22,"pop":899200},
  {"id":12,"name":"Chatra","state":"Jharkhand","lat":24.2018,"lng":84.8717,"road":35,"power":42,"water":33,"telecom":29,"pop":1042886},
  {"id":13,"name":"Latehar","state":"Jharkhand","lat":23.7449,"lng":84.5025,"road":32,"power":38,"water":30,"telecom":27,"pop":725673},
  {"id":14,"name":"Garhwa","state":"Jharkhand","lat":24.1583,"lng":83.8083,"road":30,"power":36,"water":28,"telecom":25,"pop":1322784},
  {"id":15,"name":"Palamu","state":"Jharkhand","lat":24.0296,"lng":84.0686,"road":33,"power":40,"water":31,"telecom":28,"pop":1936319},
  {"id":20,"name":"Malkangiri","state":"Odisha","lat":18.3500,"lng":81.8833,"road":22,"power":41,"water":25,"telecom":18,"pop":612727},
  {"id":21,"name":"Nabarangpur","state":"Odisha","lat":19.2307,"lng":82.5489,"road":30,"power":38,"water":33,"telecom":24,"pop":1218277},
  {"id":22,"name":"Nuapada","state":"Odisha","lat":20.8330,"lng":82.5500,"road":35,"power":46,"water":38,"telecom":29,"pop":606490},
  {"id":30,"name":"Bijapur","state":"Chhattisgarh","lat":18.8058,"lng":80.8048,"road":20,"power":28,"water":19,"telecom":14,"pop":255230},
  {"id":31,"name":"Dantewada","state":"Chhattisgarh","lat":18.8997,"lng":81.3479,"road":25,"power":33,"water":22,"telecom":20,"pop":533638},
  {"id":32,"name":"Sukma","state":"Chhattisgarh","lat":18.3853,"lng":81.6583,"road":22,"power":30,"water":20,"telecom":16,"pop":249857},
  {"id":39,"name":"Kiphire","state":"Nagaland","lat":25.9762,"lng":94.7793,"road":15,"power":28,"water":32,"telecom":12,"pop":74033},
  {"id":40,"name":"Mon","state":"Nagaland","lat":26.7292,"lng":94.8316,"road":21,"power":33,"water":28,"telecom":17,"pop":250260},
  {"id":54,"name":"Anjaw","state":"Arunachal Pradesh","lat":28.0667,"lng":96.8333,"road":12,"power":28,"water":22,"telecom":8,"pop":21089},
]

def calc_score(d):
    return round(d["road"]*0.30 + d["power"]*0.25 + d["water"]*0.25 + d["telecom"]*0.20)

@app.get("/")
def home():
    return {"status": "InfraLens API running", "version": "1.0.0", "endpoints": ["/api/health", "/api/metadata", "/api/upload-file", "/api/get-file", "/districts", "/district/{id}"]}

@app.get("/districts")
def get_districts():
    result = []
    for d in DISTRICTS:
        score    = calc_score(d)
        severity = "critical" if score < 40 else "moderate" if score < 70 else "good"
        risk     = min(95, round((100 - score) * 0.65))
        result.append({**d, "score": score, "severity": severity, "risk": risk})
    return result

@app.get("/district/{id}")
def get_district(id: int):
    d = next((x for x in DISTRICTS if x["id"] == id), None)
    if not d:
        raise HTTPException(status_code=404, detail="District not found")
    score    = calc_score(d)
    severity = "critical" if score < 40 else "moderate" if score < 70 else "good"
    risk     = min(95, round((100 - score) * 0.65))
    return {**d, "score": score, "severity": severity, "risk": risk}

@app.get("/api/districts/critical")
def get_critical():
    result = []
    for d in DISTRICTS:
        score = calc_score(d)
        if score < 40:
            result.append({**d, "score": score, "severity": "critical"})
    return {"count": len(result), "data": sorted(result, key=lambda x: x["score"])}

@app.post("/api/predict")
def predict(data: dict):
    road    = data.get("road", 0)
    power   = data.get("power", 0)
    water   = data.get("water", 0)
    telecom = data.get("telecom", 0)
    score   = round(road*0.30 + power*0.25 + water*0.25 + telecom*0.20)
    risk    = min(95, round((100 - score) * 0.65))
    severity = "critical" if score < 40 else "moderate" if score < 70 else "good"
    layers  = sorted([
        {"layer": "road",    "coverage": road,    "scheme": "PMGSY Phase III",    "cost": "₹8-15 Cr/km"},
        {"layer": "power",   "coverage": power,   "scheme": "PM-KUSUM Solar",     "cost": "₹3-6 Cr/village"},
        {"layer": "water",   "coverage": water,   "scheme": "Jal Jeevan Mission", "cost": "₹1.5-4 Cr/village"},
        {"layer": "telecom", "coverage": telecom, "scheme": "BharatNet OFC",      "cost": "₹0.8-2 Cr/tower"},
    ], key=lambda x: x["coverage"])
    invest = round(sum(max(0, 70 - l["coverage"]) * 50 for l in layers))
    return {"score": score, "severity": severity, "risk": risk, "invest_cr": invest, "interventions": layers}
