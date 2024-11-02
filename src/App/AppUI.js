import React from "react";
import { SkinContext } from '../SkinContext';
import { SkinItem } from '../SkinItem';
import { SkinsMenu } from '../SkinsMenu';
import { SkinsMissingButton } from '../SkinsMissingButton';
import { SkinsWishedButton } from '../SkinsWishedButton';
import { SkinsOwnedButton } from '../SkinsOwnedButton';
import { AddWishedSkinButton } from '../AddWishedSkinButton';
import { AddOwnedSkinButton } from '../AddOwnedSkinButton';
import { DeleteSkinButton } from '../DeleteSkinButton';
import { SkinsContent } from '../SkinsContent';
import { SkinList } from "../SkinList";

function AppUI() {
    const {
        showMissingSkins,
        showWishedSkins,
        showOwnedSkins,
        displayedSkins,
        isDeleteButtonVisible,
        isOwnedButtonVisible,
        isWishedButtonVisible,
        toggleDeleteButton,
        toggleOwnedButton,
        toggleWishedButton,
        findActiveButton
    } = React.useContext(SkinContext);

    return (
        <>
            <SkinsMenu>
                <SkinsMissingButton showMissingSkins={showMissingSkins} />
                <SkinsWishedButton showWishedSkins={showWishedSkins} />
                <SkinsOwnedButton showOwnedSkins={showOwnedSkins} />
            </SkinsMenu>

            <SkinsContent>
                {isOwnedButtonVisible && <AddOwnedSkinButton toggleOwnedButton={toggleOwnedButton} />}
                {isWishedButtonVisible && <AddWishedSkinButton toggleWishedButton={toggleWishedButton} />}
                {isDeleteButtonVisible && <DeleteSkinButton toggleDeleteButton={toggleDeleteButton} />}

                <SkinList>
                    {displayedSkins.filter(skin => skin).map((skin) => (
                        skin.url ? (
                            <SkinItem 
                                key={skin.id}
                                src={skin.url}
                                id={skin.id} 
                                findActiveButton={findActiveButton}
                            />
                        ) : null  // Manejo de skins que no tienen URL
                    ))}
                </SkinList>
            </SkinsContent>
        </>
    );
}

export { AppUI };