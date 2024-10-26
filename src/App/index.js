import React from "react";
import { AppUI } from './AppUI';
import { SkinList } from "../SkinList";
import { SkinAsset } from "../SkinAsset";
import { SkinMenu } from "../SkinMenu";
import { AddOwnedSkin } from "../AddOwnedSkin";
import { AddWishedSkin } from "../AddWishedSkin";
import { DeleteSkin } from "../DeleteSkin";

function App() {
    return (
        <div className="App">
            <SkinList>
                <SkinAsset />
            </SkinList>

            <SkinMenu />
            <AddOwnedSkin />
            <AddWishedSkin />
            <DeleteSkin />
        </div>
    );
}

export default App;