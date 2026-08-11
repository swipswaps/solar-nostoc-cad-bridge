from fastapi import FastAPI, Query
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
import io
import zipfile
import numpy as np

app = FastAPI(title="Solar Nostoc Simulation API", version="1.5.0")

class ReactorParams(BaseModel):
    length: float = Field(..., gt=0)
    width: float = Field(..., gt=0)
    depth: float = Field(..., gt=0)
    velocity: float = Field(..., gt=0)

@app.get("/health")
def health():
    return {"status": "healthy", "service": "solar-nostoc-backend"}

@app.get("/api/simulate")
def simulate(length: float = Query(..., gt=0),
             width: float = Query(..., gt=0),
             depth: float = Query(..., gt=0),
             velocity: float = Query(..., gt=0)):
    nu = 1.004e-6
    area = width * depth
    perimeter = 2 * (width + depth)
    hyd_diam = 4 * area / perimeter
    reynolds = (velocity * hyd_diam) / nu
    flow_rate_lpm = velocity * width * depth * 60000
    regime = "laminar" if reynolds < 2300 else "turbulent"
    return {
        "hydraulicDiameter": hyd_diam,
        "reynoldsNumber": reynolds,
        "flowRateLpm": flow_rate_lpm,
        "regime": regime
    }

@app.get("/api/velocity_profile")
def velocity_profile(length: float = Query(..., gt=0),
                     width: float = Query(..., gt=0),
                     depth: float = Query(..., gt=0),
                     velocity: float = Query(..., gt=0),
                     n_points: int = Query(20, gt=1)):
    """
    Analytical plane Poiseuille velocity profile between infinite plates.
    For a wide channel (width >> depth), U_max = 1.5 * U_mean.
    CITATION: White, F. M. "Fluid Mechanics", 8th ed., McGraw-Hill, 2016.
    """
    Umax = 1.5 * velocity
    y = np.linspace(0, depth, n_points)
    u = Umax * (1 - (y / depth)**2)
    points = [{"y": float(yi), "u": float(ui)} for yi, ui in zip(y, u)]
    return {"maxU": Umax, "points": points}

@app.get("/api/export_case")
def export_case(length: float = Query(..., gt=0),
                width: float = Query(..., gt=0),
                depth: float = Query(..., gt=0),
                velocity: float = Query(..., gt=0)):
    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zf:
        U_content = f'''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile {{ version 2.0; format ascii; class volVectorField; location "0"; object U; }}
dimensions [0 1 -1 0 0 0 0];
internalField uniform ({velocity} 0 0);
boundaryField
{{
    inlet {{ type fixedValue; value uniform ({velocity} 0 0); }}
    outlet {{ type zeroGradient; }}
    nostocSurface {{ type noSlip; }}
    coverPlate {{ type noSlip; }}
    frontAndBack {{ type empty; }}
}}
'''
        zf.writestr('0/U', U_content)

        p_content = '''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile { version 2.0; format ascii; class volScalarField; location "0"; object p; }
dimensions [0 2 -2 0 0 0 0];
internalField uniform 0;
boundaryField
{
    inlet { type zeroGradient; }
    outlet { type fixedValue; value uniform 0; }
    nostocSurface { type zeroGradient; }
    coverPlate { type zeroGradient; }
    frontAndBack { type empty; }
}
'''
        zf.writestr('0/p', p_content)

        tp_content = '''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile { version 2.0; format ascii; class dictionary; location "constant"; object transportProperties; }
transportModel Newtonian;
nu nu [0 2 -1 0 0 0 0] 1.004e-06;
'''
        zf.writestr('constant/transportProperties', tp_content)

        bmd = f'''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile {{ version 2.0; format ascii; class dictionary; location "system"; object blockMeshDict; }}
scale 1;
vertices
(
    (0 0 0)
    ({length} 0 0)
    ({length} {depth} 0)
    (0 {depth} 0)
    (0 0 {width})
    ({length} 0 {width})
    ({length} {depth} {width})
    (0 {depth} {width})
);
blocks ( hex (0 1 2 3 4 5 6 7) (100 20 1) simpleGrading (1 1 1) );
edges ( );
boundary
(
    inlet {{ type patch; faces ( (0 4 7 3) ); }}
    outlet {{ type patch; faces ( (1 2 6 5) ); }}
    nostocSurface {{ type wall; faces ( (0 1 5 4) ); }}
    coverPlate {{ type wall; faces ( (3 7 6 2) ); }}
    frontAndBack {{ type empty; faces ( (0 3 2 1) (4 5 6 7) ); }}
);
mergePatchPairs ( );
'''
        zf.writestr('system/blockMeshDict', bmd)

        cd = '''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile { version 2.0; format ascii; class dictionary; location "system"; object controlDict; }
application simpleFoam;
startFrom startTime;
startTime 0;
stopAt endTime;
endTime 500;
deltaT 1;
writeControl timeStep;
writeInterval 100;
purgeWrite 0;
writeFormat ascii;
writePrecision 6;
writeCompression off;
runTimeModifiable true;
'''
        zf.writestr('system/controlDict', cd)

        fvs = '''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile { version 2.0; format ascii; class dictionary; location "system"; object fvSchemes; }
ddtSchemes { default steadyState; }
gradSchemes { default gauss linear; }
divSchemes { default none; div(phi,U) bounded Gauss linearUpwind grad(U); }
laplacianSchemes { default gauss linear corrected; }
interpolationSchemes { default linear; }
snGradSchemes { default corrected; }
'''
        zf.writestr('system/fvSchemes', fvs)

        fvsol = '''/*--------------------------------*- C++ -*----------------------------------*\\
| =========                 |                                                 |
| \\\\      /  F ield         | OpenFOAM: The Open Source CFD Toolbox           |
|  \\\\    /   O peration     | Version:  v2406                                 |
|   \\\\  /    A nd           | Website:  www.openfoam.com                      |
|    \\\\/     M anipulation  |                                                 |
\\*---------------------------------------------------------------------------*/
FoamFile { version 2.0; format ascii; class dictionary; location "system"; object fvSolution; }
solvers { p { solver GAMG; tolerance 1e-06; relTol 0.01; smoother GaussSeidel; } "(U|k|omega)" { solver smoothSolver; smoother symGaussSeidel; tolerance 1e-05; relTol 0.1; } }
SIMPLE { nNonOrthogonalCorrectors 0; consistent yes; residualControl { p 1e-4; U 1e-4; } }
relaxationFactors { fields { p 0.3; } equations { U 0.7; } }
'''
        zf.writestr('system/fvSolution', fvsol)

        # Allrun script — NO 'set -e'
        allrun = f'''#!/bin/bash
# No 'set -e' – explicit checks.
blockMesh || {{ echo "blockMesh failed"; exit 1; }}
simpleFoam || {{ echo "simpleFoam failed"; exit 1; }}
echo "Simulation finished. Post-process with paraFoam"
'''
        zf.writestr('Allrun', allrun)

    zip_buffer.seek(0)
    return StreamingResponse(zip_buffer, media_type="application/zip",
                             headers={"Content-Disposition": "attachment; filename=nostoc_case.zip"})
