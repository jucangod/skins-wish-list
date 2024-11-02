import React from "react";
import { SkinContext } from '../SkinContext';
import { SkinItem } from '../SkinItem';
import { SkinList } from '../SkinList';
import { SkinsMenu } from '../SkinsMenu';
import { SkinsMissingButton } from '../SkinsMissingButton';
import { SkinsWishedButton } from '../SkinsWishedButton';
import { SkinsOwnedButton } from '../SkinsOwnedButton';
import { AddWishedSkinButton } from '../AddWishedSkinButton'
import { AddOwnedSkinButton } from '../AddOwnedSkinButton'
import { DeleteSkinButton } from '../DeleteSkinButton'

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
                <SkinsMissingButton
                    showMissingSkins={showMissingSkins}
                />
                <SkinsWishedButton 
                    showWishedSkins={showWishedSkins}
                />
                <SkinsOwnedButton 
                    showOwnedSkins={showOwnedSkins}
                />
            </SkinsMenu>

            {isOwnedButtonVisible && <AddOwnedSkinButton 
                toggleOwnedButton={toggleOwnedButton}
            />}
            {isWishedButtonVisible && <AddWishedSkinButton 
                toggleWishedButton={toggleWishedButton}
            />}
            {isDeleteButtonVisible && <DeleteSkinButton 
                toggleDeleteButton={toggleDeleteButton}
            />}

            <SkinList>
                {displayedSkins.map((skin) => (
                    <SkinItem 
                        key={skin.id}
                        src={skin.url}
                        id={skin.id} 
                        findActiveButton={findActiveButton}
                    />
                ))}
            </SkinList>
        </>
    );
}

export { AppUI };