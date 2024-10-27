import React from "react";
import { SkinContext } from "../SkinContext";

function SkinList({}) {
    const {
        findActiveButton,
    } = React.useContext(SkinContext);

    const images = []
    for(let i = 1; i < 6; i++) {
        images.push(require(`../Assets/image(${i}).jpg`))
    }

    return (
        images.map((src, index) => (
            <img 
                key={index}
                src={src}
                alt={`Skin ${index + 1}`}
                onClick={() => findActiveButton}
            />
        ))
    );
}

export { SkinList }