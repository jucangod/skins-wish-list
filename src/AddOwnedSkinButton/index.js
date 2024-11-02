import React from "react";

function AddOwnedSkinButton({ toggleOwnedButton }) {
    return (
        <div className="toggle-button-cover">
            <div id="button-1" className="button r">
                <input className="checkbox" type="checkbox" onChange={toggleOwnedButton} />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
            <span className="button-text">Owned</span>
        </div>
    );
}

export { AddOwnedSkinButton }