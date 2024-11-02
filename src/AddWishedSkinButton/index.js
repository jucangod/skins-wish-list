import React from "react";

function AddWishedSkinButton({ activeWishedButton }) {
    return(
        <button
            className="AddWishedSkinButton"
            onClick={activeWishedButton}
        >
            Wished Skins
        </button>
    );
};

export { AddWishedSkinButton }