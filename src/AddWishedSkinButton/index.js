import React from "react";

function AddWishedSkinButton({ toggleWishedButton }) {
    return (
        <div className="toggle-button-cover">
            <div id="button-2" className="button r">
                <input className="checkbox" type="checkbox" onChange={toggleWishedButton} />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
            <span className="button-text">Wished</span>
        </div>
    );
}

export { AddWishedSkinButton }