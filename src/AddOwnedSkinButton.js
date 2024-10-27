import React from "react";

function AddOwnedSkinButton({ turnOwnOn }) {

    return(
        <button
            className="AddOwnedSkinButton"
            onClick={turnOwnOn}
        >
            Owned Skins
        </button>
    );
};

export { AddOwnedSkinButton }