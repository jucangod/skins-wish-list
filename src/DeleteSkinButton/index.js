import React from "react";

function DeleteSkinButton({ activeDeleteButton }) {

    return(
        <button
            className="DeleteSkinsButton"
            onClick={activeDeleteButton}
        >
            Delete Skins
        </button>
    );
};

export { DeleteSkinButton }