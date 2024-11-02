import React from "react";
import "./SkinItem.css"

function SkinItem({ src, id, findActiveButton }) {
    return (
        <div className="card" onClick={() => findActiveButton(id)}>
            <div className="card2">
                <img src={src} alt="Skin" />
            </div>
        </div>
    );
}

export { SkinItem }