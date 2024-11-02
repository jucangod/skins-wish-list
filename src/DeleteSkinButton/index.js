import React from "react";

function DeleteSkinButton({ toggleDeleteButton }) {
    return (
        <div className="toggle-button-cover">
            <div id="button-3" className="button r">
                <input className="checkbox" type="checkbox" onChange={toggleDeleteButton} />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
            <span className="button-text">Delete</span>
        </div>
    );
}

export { DeleteSkinButton }