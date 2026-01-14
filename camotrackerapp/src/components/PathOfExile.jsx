import React from "react";
import Rings from "./pathofexilecomponents/Rings";
import Amulets from "./pathofexilecomponents/Amulets";
import "./styles/Pathofexile.css"

export default function PathOfExile() {
    return (
        <div className="path-of-exile-page">
            <h1>Path Of Exile</h1>
            <Rings />
            <Amulets />
        </div>
    )
}