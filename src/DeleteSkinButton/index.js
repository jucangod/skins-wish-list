import React from "react";

function DeleteSkinButton({ toggleDeleteButton }) {

    return(
        <button
            className="DeleteSkinsButton"
            onClick={toggleDeleteButton}
        >
            Delete Skins
        </button>
    );
};

export { DeleteSkinButton }