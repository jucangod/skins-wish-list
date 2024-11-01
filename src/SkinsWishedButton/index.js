import React from "react";

function SkinsWishedButton({showWishedSkins}) {
    return(
        <button
            className="wishButton"
            onClick={showWishedSkins}
        >
            Wish
        </button>
    );
};

export { SkinsWishedButton }