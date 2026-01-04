import React from "react";
import "../styles/styles.css"
import Weapons from "../Weapons";

export default function ArcLight() {

    return(
        <>
    <div className="arc-light-container">
        <h1>Arc Light</h1>
            
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
                    <input type="checkbox" id="7"/>
                </div>
                <div>{Weapons[8].name}
                    <input type="checkbox" id="8"/>
                </div>
                <div>{Weapons[9].name}
                    <input type="checkbox" id="9"/>
                </div>
                <div>{Weapons[10].name}
                    <input type="checkbox" id="10"/>
                </div>
                <div>{Weapons[11].name}
                    <input type="checkbox" id="11"/>
                </div>
                <div>{Weapons[12].name}
                    <input type="checkbox" id="12"/>
                </div>
                <div>{Weapons[13].name}
                    <input type="checkbox" id="13"/>
                </div>

            <h2 className="class-title">Shotguns</h2>
                <div>{Weapons[14].name}
                    <input type="checkbox" id="14"/>
                </div>
                <div>{Weapons[15].name}
                    <input type="checkbox" id="15"/>
                </div>
                <div>{Weapons[16].name}
                    <input type="checkbox" id="16"/>
                </div>

            <h2 className="class-title">Light Machine Gun</h2>
                <div>{Weapons[17].name}
                    <input type="checkbox" id="17"/>
                </div>
                <div>{Weapons[18].name}
                    <input type="checkbox" id="18"/>
                </div>

            <h2 className="class-title">Marksman Rifles</h2>
                <div>{Weapons[19].name}
                    <input type="checkbox" id="19"/>
                </div>
                <div>{Weapons[20].name}
                    <input type="checkbox" id="20"/>
                </div>
                <div>{Weapons[21].name}
                    <input type="checkbox" id="21"/>
                </div>

            <h2 className="class-title">Sniper Rifles</h2>
                <div>{Weapons[22].name}
                    <input type="checkbox" id="22"/>
                </div>
                <div>{Weapons[23].name}
                    <input type="checkbox" id="23"/>
                </div>
                <div>{Weapons[24].name}
                    <input type="checkbox" id="24"/>
                </div>

            <h2 className="class-title">Pistols</h2>
                <div>{Weapons[25].name}
                    <input type="checkbox" id="25"/>
                </div>
                <div>{Weapons[26].name}
                    <input type="checkbox" id="26"/>
                </div>
                <div>{Weapons[27].name}
                    <input type="checkbox" id="27"/>
                </div>

            <h2 className="class-title">Launchers</h2>
                <div>{Weapons[28].name}
                    <input type="checkbox" id="28"/>
                </div>
                <div>{Weapons[29].name}
                    <input type="checkbox" id="29"/>
                </div>
            
            <h2 className="class-title">Melee</h2>
                <div>{Weapons[30].name}
                    <input type="checkbox" id="30"/>
                </div>
                <div>{Weapons[31].name}
                    <input type="checkbox" id="31"/>
                </div>
            </div>
        </>
    )
}