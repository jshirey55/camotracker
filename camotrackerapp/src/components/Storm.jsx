import React from "react";
import Weapons from "./Weapons";
import "./styles/styles.css"

export default function Storm() {
    
    return(
        <>
    <div className="storm-container">
        <h1>Tempest</h1>
            
            <h2 className="class-title">Assult Rifles</h2>
                <div>{Weapons[0].name}
                    <input type="checkbox" id='0'/>
                </div>
                <div>{Weapons[1].name}
                    <input type="checkbox" id="1" />
                </div>
                <div>{Weapons[2].name}
                    <input type="checkbox" id="2"/>
                </div>
                <div>{Weapons[3].name}
                    <input type="checkbox" id="3"/>
                </div>
                <div>{Weapons[4].name}
                    <input type="checkbox" id="4"/>
                </div>
                <div>{Weapons[5].name}
                    <input type="checkbox" id="5"/>
                </div>
                <div>{Weapons[6].name}
                    <input type="checkbox" id="6"/>
                </div>

            <h2 className="class-title">Submachine Guns</h2>
                <div>{Weapons[7].name}
                    <input type="checkbox" id="ryden"/>
                </div>
                <div>{Weapons[8].name}
                    <input type="checkbox" id="rk9"/>
                </div>
                <div>{Weapons[9].name}
                    <input type="checkbox" id="razor"/>
                </div>
                <div>{Weapons[10].name}
                    <input type="checkbox" id="dravec"/>
                </div>
                <div>{Weapons[11].name}
                    <input type="checkbox" id="carbon"/>
                </div>
                <div>{Weapons[12].name}
                    <input type="checkbox" id="mpc"/>
                </div>
                <div>{Weapons[13].name}
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