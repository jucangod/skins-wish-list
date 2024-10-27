import React from "react";

function AddWishedSkinButton({ turnWishOn }) {

    return(
        <button
            className="AddWishedSkinsButton"
            onClick={turnWishOn}
        >
            Wished Skins
        </button>
    );
};

export { AddWishedSkinButton }