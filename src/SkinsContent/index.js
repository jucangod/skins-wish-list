import React from "react";
import './SkinsContent.css'

function SkinsContent({ children }) {
    return (
        <div className="main-content">
            {children}
        </div>
    );
}

export { SkinsContent };