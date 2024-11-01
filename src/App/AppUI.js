import React from "react";
import { SkinContext } from '../SkinContext';
import { SkinItem } from '../SkinItem';
import { SkinList } from '../SkinList'

function AppUI() {
    const {
        missingSkins,
        ownedSkins,
        wishedSkins
    } = React.useContext(SkinContext);

    return (
        <>
        <SkinList>
            {missingSkins.map((skin) => 
                <SkinItem 
                    key={skin.id}
                    src={skin.url}
                />
            )}
        </SkinList>
            
        </>
    );
}

export { AppUI };

//     return (
//         <>
//             {missingSkins.map((skin) =>
//                 <SkinItem
//                     key={skin.id}
//                     img={skin.url}
//                 />
//             )}

//             {/* <SkinsMenu>
//                 <SkinsMissingButton>
//                     <SkinList>
//                         {missingSkins.map((skin) =>
//                             <SkinItem
//                                 key={skin.id}
//                                 img={skin.url}
//                             />
//                         )}
//                     </SkinList>
//                 </SkinsMissingButton>
//             </SkinsMenu> */}
//         </>
//     );

// import { SkinItem } from '../SkinItem';
// import { AddWishedSkinButton } from '../AddWishedSkinButton'
// import { DeleteSkinButton } from '../DeleteSkinButton'
// import { AddOwnedSkinButton } from '../AddOwnedSkinButton'
// import { SkinsMissingButton } from '../SkinsMissingButton'
// import { SkinsOwnedButton } from '../SkinsOwnedButton'
// import { SkinsWishButton } from '../SkinsWishButton'

// function AppUI(){
//     const {
//         toggleButtons,
//         // missingSkins,
//         // ownedSkins,
//         // wishSkins,
//     } = React.useContext(SkinContext);

//     return (
//         <>
//             <SkinsMenu>
//                 <SkinsMissingButton>
//                     <SkinList>
//                     {/* {missingSkins.map((skin) => (
//                         <SkinItem
//                             key={skin.id}
//                             img={skin.url}
//                         />
//                     ))} */}
//                     </SkinList>
//                 </SkinsMissingButton>
//                 <SkinsWishButton>
//                     <SkinList>
//                     {/* {wishSkins.map((skin) => (
//                         <SkinItem
//                             key={skin.id}
//                             img={skin.img}
//                         />
//                     ))} */}
//                     </SkinList>
//                 </SkinsWishButton>
//                 <SkinsOwnedButton>
//                     <SkinList>
//                     {/* {ownedSkins.map((skin) => (
//                         <SkinItem
//                             key={skin.id}
//                             img={skin.url}
//                         />
//                     ))} */}
//                     </SkinList>
//                 </SkinsOwnedButton>
//             </SkinsMenu>

//             <AddWishedSkinButton 
//                 toggleButtons={toggleButtons}
//             />
//             <AddOwnedSkinButton
//                 toggleButtons={toggleButtons}
//             />
//             <DeleteSkinButton
//                 toggleButtons={toggleButtons}
//             />

//             <SkinItem></SkinItem>
//       </>
//     );
// }

// export { AppUI };