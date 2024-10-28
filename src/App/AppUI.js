import React from 'react'
import { SkinList } from '../SkinList'
import { SkinsMenu } from '../SkinsMenu'
import { SkinItem } from '../SkinItem';
import { AddWishedSkinButton } from '../AddWishedSkinButton'
import { DeleteSkinButton } from '../DeleteSkinButton'
import { AddOwnedSkinButton } from '../AddOwnedSkinButton'
import { SkinContext } from '../SkinContext';
import { SkinsMissingButton } from '../SkinsMissingButton'
import { SkinsOwnedButton } from '../SkinsOwnedButton'
import { SkinsWishButton } from '../SkinsWishButton'

function AppUI(){
    const {
        toggleButtons,
        missingSkins,
        ownedSkinsList,
        wishSkinsList,
        findSection,
    } = React.useContext(SkinContext);

    return (
        <>
            <SkinsMenu>
                <SkinsMissingButton
                    missingSkins={missingSkins}
                >
                    <SkinList>
                        <SkinItem
                        />
                    </SkinList>
                </SkinsMissingButton>
                <SkinsWishButton
                    findSection={findSection}
                >
                    <SkinList>
                    {wishSkinsList.map((skin) => (
                        <SkinItem
                        key={skin.index}
                        img={skin.img}
                        isOwned={skin.isOwned}
                        isWished={skin.isWished}
                        />
                    ))}
                    </SkinList>
                </SkinsWishButton>
                <SkinsOwnedButton
                    findSection={findSection}
                >
                    <SkinList>
                    {ownedSkinsList.map((skin) => (
                        <SkinItem
                        key={skin.index}
                        img={skin.img}
                        isOwned={skin.isOwned}
                        isWished={skin.isWished}
                        />
                    ))}
                    </SkinList>
                </SkinsOwnedButton>
            </SkinsMenu>

            <AddWishedSkinButton 
                toggleButtons={toggleButtons}
            />
            <AddOwnedSkinButton
                toggleButtons={toggleButtons}
            />
            <DeleteSkinButton
                toggleButtons={toggleButtons}
            />

            <SkinItem></SkinItem>
      </>
    );
}

export { AppUI };