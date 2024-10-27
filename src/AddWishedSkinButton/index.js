import React from "react";

function AddWishedSkinButton({ toggleWishButton }) {
    return(
        <button
            className="AddWishedSkinsButton"
            onClick={toggleWishButton}
        >
            Wished Skins
        </button>
    );
};

export { AddWishedSkinButton }