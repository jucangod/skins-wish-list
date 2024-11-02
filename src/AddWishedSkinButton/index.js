import React from "react";

function AddWishedSkinButton({ toggleWishedButton }) {
    return(
        <button
            className="AddWishedSkinButton"
            onClick={toggleWishedButton}
        >
            Wished Skins
        </button>
    );
};

export { AddWishedSkinButton }