from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_health():
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == "healthy"

def test_simulate_laminar():
    params = {"length":1.0,"width":0.1,"depth":0.01,"velocity":0.002}
    r = client.get("/api/simulate", params=params)
    assert r.status_code == 200
    data = r.json()
    assert data["regime"] == "laminar"
    assert data["reynoldsNumber"] > 0

def test_simulate_turbulent():
    params = {"length":1.0,"width":0.2,"depth":0.05,"velocity":0.5}
    r = client.get("/api/simulate", params=params)
    assert r.status_code == 200
    data = r.json()
    assert data["regime"] == "turbulent"
    assert data["reynoldsNumber"] >= 2300

def test_velocity_profile():
    params = {"length":1.0,"width":0.1,"depth":0.01,"velocity":0.002}
    r = client.get("/api/velocity_profile", params=params)
    assert r.status_code == 200
    data = r.json()
    assert "maxU" in data
    assert len(data["points"]) > 0

def test_export_case():
    params = {"length":1.0,"width":0.1,"depth":0.01,"velocity":0.002}
    r = client.get("/api/export_case", params=params)
    assert r.status_code == 200
    assert r.headers["content-type"] == "application/zip"
    assert b"PK" in r.content
