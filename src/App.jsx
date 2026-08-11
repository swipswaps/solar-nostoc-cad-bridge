import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Layers, Settings, Terminal, Download, Activity, Sliders, AlertCircle, Server, ServerOff } from 'lucide-react';

export default function App() {
  // --- Core state ---
  const [length, setLength] = useState(1.0);
  const [width, setWidth] = useState(0.1);
  const [depth, setDepth] = useState(0.01);
  const [velocity, setVelocity] = useState(0.002);
  const [substrate, setSubstrate] = useState('glass');
  const [activeTab, setActiveTab] = useState('cad');
  const [presetName, setPresetName] = useState('Custom');

  // --- Backend state ---
  const [backendAvailable, setBackendAvailable] = useState(false);
  const [backendChecking, setBackendChecking] = useState(true);

  // --- CFD data state ---
  const [metrics, setMetrics] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mountRef = useRef(null);

  // -------------------------------------------------------------------------
  // 1. Auto-detect backend on load (receipts-ocr pattern)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          if (data.status === 'healthy') {
            setBackendAvailable(true);
          }
        }
      } catch (e) {
        // Backend not running – that's OK, we fallback to viewer mode
        setBackendAvailable(false);
      } finally {
        setBackendChecking(false);
      }
    };
    checkBackend();
  }, []);

  // -------------------------------------------------------------------------
  // 2. Fetch CFD data when backend is available and parameters change
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!backendAvailable) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({ length, width, depth, velocity });
        const [metricsRes, profileRes] = await Promise.all([
          fetch(`/api/simulate?${params}`),
          fetch(`/api/velocity_profile?${params}`)
        ]);
        if (!metricsRes.ok || !profileRes.ok) throw new Error('Failed to fetch from backend');
        const m = await metricsRes.json();
        const p = await profileRes.json();
        setMetrics(m);
        setProfileData(p);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [length, width, depth, velocity, backendAvailable]);

  // -------------------------------------------------------------------------
  // 3. Three.js scene (viewer mode – works without backend)
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (activeTab !== 'cad') return;
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
    camera.position.set(1.5, 0.8, 1.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const group = new THREE.Group();

    const subGeo = new THREE.BoxGeometry(length, 0.005, width);
    const subMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.9 });
    const subMesh = new THREE.Mesh(subGeo, subMat);
    subMesh.position.set(0, -0.0025, 0);
    group.add(subMesh);

    const waterGeo = new THREE.BoxGeometry(length, depth, width);
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.4, roughness: 0.1 });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.set(0, depth / 2, 0);
    group.add(waterMesh);

    const coverGeo = new THREE.BoxGeometry(length, 0.002, width);
    const coverMat = new THREE.MeshStandardMaterial({
      color: substrate === 'glass' ? 0xe2e8f0 : 0xfde047,
      transparent: true,
      opacity: 0.6,
      metalness: 0.2
    });
    const coverMesh = new THREE.Mesh(coverGeo, coverMat);
    coverMesh.position.set(0, depth + 0.001, 0);
    group.add(coverMesh);

    group.position.x = -length / 2;
    scene.add(group);

    const grid = new THREE.GridHelper(4, 20, 0x334155, 0x1e293b);
    grid.position.y = -0.01;
    scene.add(grid);

    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      group.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [length, width, depth, substrate, activeTab]);

  // -------------------------------------------------------------------------
  // 4. Download OpenFOAM case (only when backend is available)
  // -------------------------------------------------------------------------
  const handleDownload = async () => {
    if (!backendAvailable) return;
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ length, width, depth, velocity });
      const res = await fetch(`/api/export_case?${params}`);
      if (!res.ok) throw new Error('Export failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'nostoc_case.zip';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------------------------------------
  // 5. Presets
  // -------------------------------------------------------------------------
  const applyPreset = (type) => {
    if (type === 'laminar-low') {
      setLength(0.8); setWidth(0.08); setDepth(0.005); setVelocity(0.001); setSubstrate('glass');
      setPresetName('Low Shear Laminar');
    } else if (type === 'nutrient-optimum') {
      setLength(1.2); setWidth(0.15); setDepth(0.012); setVelocity(0.0035); setSubstrate('lexan');
      setPresetName('Nutrient Optimum');
    } else if (type === 'high-throughput') {
      setLength(1.5); setWidth(0.2); setDepth(0.02); setVelocity(0.008); setSubstrate('lexan');
      setPresetName('High Throughput');
    } else {
      setPresetName('Custom');
    }
  };

  // -------------------------------------------------------------------------
  // 6. Render
  // -------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 text-emerald-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Solar Nostoc CAD & CFD Bridge
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">v1.5</span>
            </h1>
            <p className="text-xs text-slate-400">Integrated OpenFOAM & Three.js Photobioreactor Design Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {/* Backend status indicator */}
          {!backendChecking && (
            <div className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${
              backendAvailable
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
            }`}>
              {backendAvailable ? (
                <>
                  <Server className="w-3.5 h-3.5" />
                  <span>Backend connected</span>
                </>
              ) : (
                <>
                  <ServerOff className="w-3.5 h-3.5" />
                  <span>Backend unavailable – viewer mode</span>
                </>
              )}
            </div>
          )}
          <div className="flex items-center space-x-2">
            <button onClick={() => setActiveTab('cad')} className={`px-4 py-2 text-sm font-medium rounded-lg transition ${activeTab === 'cad' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>3D CAD View</button>
            <button onClick={() => setActiveTab('cfd')} className={`px-4 py-2 text-sm font-medium rounded-lg transition ${activeTab === 'cfd' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>OpenFOAM Sweep & CFD</button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto w-full">
        {/* Left sidebar */}
        <div className="w-full lg:w-80 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Settings className="w-5 h-5" />
              <span>Reactor Parameters</span>
            </div>
            <span className="text-xs font-mono bg-slate-800 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">{presetName}</span>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 block mb-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-emerald-400" /> Parameter Presets
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              <button onClick={() => applyPreset('laminar-low')} className="text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center">
                <span>Low Shear Laminar</span>
                <span className="text-[10px] font-mono text-emerald-400">1 mm/s</span>
              </button>
              <button onClick={() => applyPreset('nutrient-optimum')} className="text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center">
                <span>Nutrient Optimum</span>
                <span className="text-[10px] font-mono text-emerald-400">3.5 mm/s</span>
              </button>
              <button onClick={() => applyPreset('high-throughput')} className="text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center">
                <span>High Throughput</span>
                <span className="text-[10px] font-mono text-emerald-400">8 mm/s</span>
              </button>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-800 pt-4">
            <div>
              <label className="text-xs font-medium text-slate-400 flex justify-between mb-1">
                <span>Channel Length</span>
                <span className="text-emerald-400 font-mono">{length} m</span>
              </label>
              <input type="range" min="0.2" max="2.0" step="0.1" value={length} onChange={(e) => { setLength(parseFloat(e.target.value)); setPresetName('Custom'); }} className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 flex justify-between mb-1">
                <span>Channel Width</span>
                <span className="text-emerald-400 font-mono">{width} m</span>
              </label>
              <input type="range" min="0.05" max="0.5" step="0.05" value={width} onChange={(e) => { setWidth(parseFloat(e.target.value)); setPresetName('Custom'); }} className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 flex justify-between mb-1">
                <span>Water Depth</span>
                <span className="text-emerald-400 font-mono">{(depth * 1000).toFixed(1)} mm</span>
              </label>
              <input type="range" min="0.002" max="0.025" step="0.001" value={depth} onChange={(e) => { setDepth(parseFloat(e.target.value)); setPresetName('Custom'); }} className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 flex justify-between mb-1">
                <span>Inlet Velocity (U)</span>
                <span className="text-emerald-400 font-mono">{(velocity * 1000).toFixed(1)} mm/s</span>
              </label>
              <input type="range" min="0.0005" max="0.025" step="0.0005" value={velocity} onChange={(e) => { setVelocity(parseFloat(e.target.value)); setPresetName('Custom'); }} className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 block mb-1">Cover Material</label>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setSubstrate('glass')} className={`py-2 text-xs font-medium rounded-lg border transition ${substrate === 'glass' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>Glass</button>
                <button onClick={() => setSubstrate('lexan')} className={`py-2 text-xs font-medium rounded-lg border transition ${substrate === 'lexan' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>Lexan</button>
              </div>
            </div>
          </div>

          {/* CFD Metrics – only shown when backend is available */}
          {backendAvailable ? (
            <div className="mt-auto bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Hydrodynamic Metrics</span>
              </div>
              {loading && <div className="text-xs text-slate-400">Loading...</div>}
              {error && <div className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {error}</div>}
              {metrics && (
                <>
                  <div className="text-xs text-slate-400 flex justify-between">
                    <span>Reynolds Number (Re):</span>
                    <span className="font-mono text-white">{metrics.reynoldsNumber.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between">
                    <span>Volumetric Flow Rate:</span>
                    <span className="font-mono text-white">{metrics.flowRateLpm.toFixed(2)} L/min</span>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between">
                    <span>Regime:</span>
                    <span className="font-mono text-white">{metrics.regime}</span>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Backend unavailable – show friendly message */
            <div className="mt-auto bg-slate-950 p-4 rounded-xl border border-yellow-800/30 space-y-2">
              <div className="text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                <ServerOff className="w-4 h-4" />
                <span>CFD Features Unlocked with Backend</span>
              </div>
              <p className="text-xs text-slate-400">
                Run the backend locally to get Reynolds number, velocity profiles, and OpenFOAM export:
              </p>
              <code className="block bg-slate-900 p-2 rounded text-xs font-mono text-emerald-400 border border-slate-700">
                docker compose up --build
              </code>
              <p className="text-[10px] text-slate-500">Then refresh this page.</p>
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          {activeTab === 'cad' ? (
            <div className="relative flex-1 w-full h-[500px] lg:h-auto flex flex-col">
              <div ref={mountRef} className="flex-1 w-full cursor-grab active:cursor-grabbing" />
              {/* Velocity profile overlay – only when backend available and data loaded */}
              {backendAvailable && profileData && (
                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur border border-slate-800 p-4 rounded-xl shadow-2xl w-72">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" /> Velocity Profile Preview
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">1D Parabolic</span>
                  </div>
                  <div className="h-28 w-full bg-slate-900 rounded-lg border border-slate-800 p-2">
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      <line x1="20" y1="10" x2="20" y2="90" stroke="#475569" strokeWidth="2" />
                      <line x1="20" y1="90" x2="180" y2="90" stroke="#475569" strokeWidth="2" />
                      <text x="15" y="15" fill="#94a3b8" fontSize="8">Cover</text>
                      <text x="10" y="95" fill="#94a3b8" fontSize="8">Nostoc</text>
                      {profileData.points.map((p, i) => {
                        const yNorm = p.y / depth;
                        const yPos = 90 - yNorm * 80;
                        const uNorm = p.u / profileData.maxU;
                        const xU = 20 + uNorm * 160;
                        return <circle key={i} cx={xU} cy={yPos} r="1.5" fill="#0ea5e9" />;
                      })}
                      <path d={`M ${profileData.points.map((p,i) => {
                        const yNorm = p.y / depth;
                        const yPos = 90 - yNorm * 80;
                        const uNorm = p.u / profileData.maxU;
                        const xU = 20 + uNorm * 160;
                        return (i===0 ? 'M' : 'L') + xU + ' ' + yPos;
                      }).join(' ')}`} fill="none" stroke="#0ea5e9" strokeWidth="2" />
                      <text x="100" y="55" fill="#0ea5e9" fontSize="9" fontFamily="monospace">U_max</text>
                    </svg>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2 flex justify-between">
                    <span>Max Velocity:</span>
                    <span className="font-mono text-white">{(profileData.maxU * 1000).toFixed(1)} mm/s</span>
                  </div>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Interactive 3D CAD Renderer (Three.js)
              </div>
            </div>
          ) : (
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" /> OpenFOAM Sweep Configuration
                  </h2>
                  <p className="text-xs text-slate-400">Generated blockMeshDict and laminar simpleFoam solver parameters for Nostoc boundary layers.</p>
                </div>
                <button
                  onClick={handleDownload}
                  disabled={loading || !backendAvailable}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition shadow-lg ${
                    backendAvailable
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  } disabled:opacity-50`}
                >
                  <Download className="w-4 h-4" /> {loading ? 'Generating...' : 'Download Case ZIP'}
                </button>
              </div>

              {!backendAvailable ? (
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-xl p-6 text-center">
                  <ServerOff className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-yellow-300">Backend Not Available</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto mt-1">
                    To generate OpenFOAM cases and run CFD simulations, start the backend locally:
                  </p>
                  <code className="block bg-slate-950 p-3 rounded-lg text-sm font-mono text-emerald-400 mt-3 border border-slate-700">
                    docker compose up --build
                  </code>
                  <p className="text-xs text-slate-500 mt-2">Then refresh this page to unlock CFD features.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Solver Target</div>
                      <div className="text-sm font-mono font-bold text-emerald-400">simpleFoam (Laminar)</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Wall Shear Calculation</div>
                      <div className="text-sm font-mono font-bold text-emerald-400">wallShearStress function</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Boundary Condition</div>
                      <div className="text-sm font-mono font-bold text-emerald-400">nostocSurface (noSlip)</div>
                    </div>
                  </div>
                  {error && <div className="bg-red-900/20 border border-red-800 text-red-300 p-3 rounded text-xs">{error}</div>}
                  <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs text-emerald-300 overflow-x-auto">
                    <pre>{`# OpenFOAM case will be generated with:
LENGTH=${length}
WIDTH=${width}
DEPTH=${depth}
VELOCITY=${velocity}
`}</pre>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
