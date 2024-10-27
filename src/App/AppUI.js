import React from 'react'
import { SkinList } from '../SkinList';
import { AddWishedSkinButton } from '../AddWishedSkinButton'
import { DeleteSkinButton } from '../DeleteSkinButton'
import { AddOwnedSkinButton } from '../AddOwnedSkinButton'
import { SkinContext } from '../SkinContext';

function AppUI(){
    const {
        toggleWishButton,
        toggleOwnButton,
        toggleDeleteButton,
        addOwnSkin,
        addWishSkin,
        deleteSkin,
    } = React.useContext(SkinContext);

    return(
        <>
            <AddWishedSkinButton
                toggleWishButton={toggleWishButton}
            />
            <AddOwnedSkinButton
                toggleOwnButton={toggleOwnButton}
            />
            <DeleteSkinButton
                toggleDeleteButton={toggleDeleteButton}
            />

            <SkinContext.Consumer>
                <SkinList>
                    
                </SkinList>
            </SkinContext.Consumer>
            {/*<SkinsMenu>
                <SkinsMissingButton
                    showMissingList={showMissingList}
                >
                    <SkinsMissingList>
                        {missingSkin.map((skin,name) => (
                            <MissingSkin 
                                key={skin.name}
                                img={skin.img}
                                isOwned={skin.isOwned}
                                isWished={skin.isWished}
                                name={skin.name}
                                activeButton={activeButton}
                            />
                        ))}
                    </SkinsMissingList>
                </SkinsMissingButton>
                <SkinsWishButton
                    showWishList={showWishList}
                >
                    <SkinsWishList>
                        {wishSkin.map((skin,name) => (
                            <WishSkin 
                                key={skin.name}
                                img={skin.img}
                                isOwned={skin.isOwned}
                                isWished={skin.isWished}
                                name={skin.name}
                                activeButton={activeButton}
                            />
                        ))}
                    </SkinsWishList>
                </SkinsWishButton>
                <SkinsOwnedButton
                    showOwnedList={showOwnedList}
                >
                    <SkinsOwnedList>
                        {ownedSkin.map((skin,name) => (
                            <OwnedSkin 
                                key={skin.name}
                                img={skin.img}
                                isOwned={skin.isOwned}
                                isWished={skin.isWished}
                                name={skin.name}
                                activeButton={activeButton}
                            />
                        ))}
                    </SkinsOwnedList>
                </SkinsOwnedButton>
            </SkinsMenu>

            <AddOwnedSkinButton
                turnOwnOn={toggleOwnButton}
            />
            <DeleteSkinButton 
                turnDeleteOn={toggleDeleteButton}
            /> */}
        </>
    );
}

export { AppUI };