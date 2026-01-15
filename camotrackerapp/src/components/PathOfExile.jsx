import React from "react";
import Rings from "./pathofexilecomponents/Rings";
import Amulets from "./pathofexilecomponents/Amulets";
import LiveCharacter from "./pathofexilecomponents/LiveCharacter";
import "./styles/Pathofexile.css"

export default function PathOfExile() {
    return (
        <div className="path-of-exile-page">
            <h1>Path Of Exile</h1>
            <LiveCharacter />
            <Rings />
            <Amulets />
        </div>
    )
}