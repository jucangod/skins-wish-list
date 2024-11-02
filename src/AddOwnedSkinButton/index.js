import React from "react";

function AddOwnedSkinButton({ activeOwnedButton }) {
    return(
        <button
            className="AddOwnedSkinButton"
            onClick={activeOwnedButton}
        >
            Owned Skins
        </button>
    );
};

export { AddOwnedSkinButton }