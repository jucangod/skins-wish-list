import React from "react";

function AddOwnedSkinButton({ toggleOwnedButton }) {
    return(
        <button
            className="AddOwnedSkinButton"
            onClick={toggleOwnedButton}
        >
            Owned Skins
        </button>
    );
};

export { AddOwnedSkinButton }