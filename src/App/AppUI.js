import { OwnedSkin } from '../OwnedSkins'
import { WishSkin } from '../WishSkins'
import { MissingSkin } from '../MissingSkins'
import { AddWishedSkinButton } from '../AddWishedSkinButton'
import { AddOwnedSkinButton } from '../AddOwnedSkinButton'
import { DeleteSkinButton } from '../DeleteSkinButton'
import { SkinsMenu } from '../SkinsMenu'
import { SkinsWishList } from '../SkinsWishList'
import { SkinsOwnedList } from '../SkinsOwnedList'
import { SkinsMissingList } from '../SkinsMissingList'
import { SkinsMissingButton } from '../SkinsMissingButton'
import { SkinsOwnedButton } from '../SkinsOwnedButton'
import { SkinsWishButton } from '../SkinsWishButton'

function AppUI() {
    return(
        <React.Fragment>
            <SkinsMenu>
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

            <AddWishedSkinButton
                turnWishOn={toggleWishButton}
            />
            <AddOwnedSkinButton
                turnOwnOn={toggleOwnButton}
            />
            <DeleteSkinButton 
                turnDeleteOn={toggleDeleteButton}
            />
        </React.Fragment>
    );
}

export { AppUI };