import React from "react";

function SkinItem({src, id, findActiveButton}) {
    return (
        <img
            id={id}
            src={src}
            alt="Skin"
            onClick={() => findActiveButton(id)}
        ></img>
    )
}

export { SkinItem }