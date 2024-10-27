import React from "react";

function AddOwnedSkinButton({ toggleOwnButton }) {
    return(
        <button
            className="AddOwnedSkinButton"
            onClick={toggleOwnButton}
        >
            Owned Skins
        </button>
    );
};

export { AddOwnedSkinButton }