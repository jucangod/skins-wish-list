import React from "react";

function DeleteSkinButton({ toggleButtons }) {

    return(
        <button
            className="DeleteSkinsButton"
            onClick={toggleButtons}
        >
            Delete Skins
        </button>
    );
};

export { DeleteSkinButton }