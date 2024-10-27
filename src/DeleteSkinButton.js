import React from "react";

function DeleteSkinButton({ turnDeleteOn }) {

    return(
        <button
            className="AddDeleteSkinsButton"
            onClick={turnDeleteOn}
        >
            Delete Skins
        </button>
    );
};

export { DeleteSkinButton }