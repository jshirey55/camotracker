import React from "react"
import "./styles/styles.css"

export default function Gold() {
    
    return(
        <>
    <div className="gold-container">
        <h1>Gold</h1>
            
            <h2 className="class-title">Assult Rifles</h2>
                <div>M15 Mod
                    <input type="checkbox" id='m15'/>
                </div>
                <div>AK-27
                    <input type="checkbox" id="ak27" />
                </div>
                <div>MXR-17
                    <input type="checkbox" id="mxr17"/>
                </div>
                <div>X9-Maverick
                    <input type="checkbox" id="x9"/>
                </div>
                <div>DS20 Mirage
                    <input type="checkbox" id="ds20"/>
                </div>
                <div>Peacekeeper Mk1
                    <input type="checkbox" id="peacekeeper"/>
                </div>

            <h2 className="class-title">Submachine Guns</h2>
                <div>Ryden 45K
                    <input type="checkbox" id="ryden"/>
                </div>
                <div>RK-9
                    <input type="checkbox" id="rk9"/>
                </div>
                <div>Razor 9mm
                    <input type="checkbox" id="razor"/>
                </div>
                <div>Dravec 45
                    <input type="checkbox" id="dravec"/>
                </div>
                <div>Carbon 57
                    <input type="checkbox" id="carbon"/>
                </div>
                <div>MPC-25
                    <input type="checkbox" id="mpc"/>
                </div>

            <h2 className="class-title">Shotguns</h2>
                <div>M10 Breacher
                    <input type="checkbox" id="m10"/>
                </div>
                <div>Echo 12
                    <input type="checkbox" id="echo"/>
                </div>
                <div>Akita
                    <input type="checkbox" id="akita"/>
                </div>

            <h2 className="class-title">Light Machine Gun</h2>
                <div>MK.78
                    <input type="checkbox" id="mk78"/>
                </div>
                <div>XM325
                    <input type="checkbox" id="xm325"/>
                </div>

            <h2 className="class-title">Marksman Rifles</h2>
                <div>M8A1
                    <input type="checkbox" id="m8a1"/>
                </div>
                <div>Warden 308
                    <input type="checkbox" id="warden"/>
                </div>
                <div>M34 Novaline
                    <input type="checkbox" id="m34"/>
                </div>

            <h2 className="class-title">Sniper Rifles</h2>
                <div>VS Recon
                    <input type="checkbox" id="vs"/>
                </div>
                <div>Shadow SK
                    <input type="checkbox" id="shadow"/>
                </div>
                <div>XR-3 Ion
                    <input type="checkbox" id="xr3"/>
                </div>

            <h2 className="class-title">Pistols</h2>
                <div>Jager 45
                    <input type="checkbox" id="jager"/>
                </div>
                <div>Velox 5.7
                    <input type="checkbox" id="velox"/>
                </div>
                <div>Coda 9
                    <input type="checkbox" id="coda"/>
                </div>

            <h2 className="class-title">Launchers</h2>
                <div>AAROW 109
                    <input type="checkbox" id="aarow"/>
                </div>
                <div>A.R.C. M1
                    <input type="checkbox" id="arc"/>
                </div>
            <h2 className="class-title">Melee</h2>
                <div>Knife
                    <input type="checkbox" id="knife"/>
                </div>
                <div>Flatline MK.II
                    <input type="checkbox" id="flatline"/>
                </div>
            </div>
        </>
    )
}
