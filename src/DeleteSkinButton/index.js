import React from "react";

function DeleteSkinButton({ toggleDeleteButton }) {

    return(
        <button
            className="AddDeleteSkinsButton"
            onClick={toggleDeleteButton}
        >
            Delete Skins
        </button>
    );
};

export { DeleteSkinButton }