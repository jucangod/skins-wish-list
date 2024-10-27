import { AddWishedSkinButton } from './AddWishedSkinButton'
import { AddOwnedSkinButton } from './AddOwnedSkinButton'
import { DeleteSkinButton } from './DeleteSkinButton'
import { SkinList } from './SkinList'
import { SkinItem } from './SkinItem'
import React from 'react'

const defaultSkins = [
    {img: require('./Assets/image(1).jpg'), isOwned: false, isWished: false, name: 'image(1)'},
    {img: require('./Assets/image(2).jpg'), isOwned: false, isWished: false, name: 'image(2)'},
    {img: require('./Assets/image(3).jpg'), isOwned: false, isWished: false, name: 'image(3)'},
    {img: require('./Assets/image(4).jpg'), isOwned: false, isWished: false, name: 'image(4)'},
    {img: require('./Assets/image(5).jpg'), isOwned: false, isWished: false, name: 'image(5)'},
];

function App() {

    const [skin, setSkin] = React.useState(defaultSkins);
    const [wishButton, setWishButton] = React.useState(false);
    const [ownButton, setOwnButton] = React.useState(false);
    const [deleteButton, setDeleteButton] = React.useState(false);
    const [activeButton, setActiveButton] = React.useState('');

    const addWishSkin = (name) => {
        const newWishSkin = [...skin];
        const skinIndex = newWishSkin.findIndex(
            (skin) => skin.name === name
        );
        newWishSkin[skinIndex].isWished = true;
        setSkin(newWishSkin)
    }

    const toggleWishButton = () => {
        if (ownButton || deleteButton) {
            setOwnButton(false);
            setDeleteButton(false);
            setOwnButton((prev) => !prev);
        }
        console.log(wishButton, ownButton, deleteButton);
        setActiveButton('wish');
        console.log('El boton activo es Wish');
    }

    const addOwnSkin = (name) => {
        const newOwnSkin = [...skin];
        const skinIndex = newOwnSkin.findIndex(
            (skin) => skin.name === name
        );
        newOwnSkin[skinIndex].isOwned = true;
        setSkin(newOwnSkin)
    }

    const toggleOwnButton = () => {
        if (deleteButton || wishButton) {
            setDeleteButton(false);
            setWishButton(false);
            setOwnButton((prev) => !prev);
        }
        console.log(ownButton, wishButton, deleteButton);
        setActiveButton('own');
        console.log('El boton activo es own');
    }

    const deleteSkin = (name) => {
        const newDeleteSkin = [...skin];
        const skinIndex = newDeleteSkin.findIndex(
            (skin) => skin.name === name
        );
        newDeleteSkin[skinIndex].isWished = false;
        newDeleteSkin[skinIndex].isOwned = false;
        setSkin(newDeleteSkin)
    }

    const toggleDeleteButton = () => {
        if (ownButton || wishButton) {
            setOwnButton(false);
            setWishButton(false);
            setDeleteButton((prev) => !prev);
        }
        console.log(deleteButton, ownButton, wishButton);
        setActiveButton('delete');
        console.log('El boton activo es delete');
    }

    return(
        <React.Fragment>
            <AddWishedSkinButton
                turnWishOn={toggleWishButton}
            />
            <AddOwnedSkinButton
                turnOwnOn={toggleOwnButton}
            />
            <DeleteSkinButton 
                turnDeleteOn={toggleDeleteButton}
            />

            <SkinList>
                {defaultSkins.map((skin, name) => (
                    <SkinItem 
                        key={skin.name}
                        img={skin.img}
                        isOwned={skin.isOwned}
                        isWished={skin.isWished}
                        name={skin.name}
                        activeButton={activeButton}
                        onWish={() => {
                            addWishSkin(skin.name)
                            if(skin.isWished){
                                console.log('La skin ', skin.name, 'se añadió a deseadas')
                            }
                        }}
                        onOwn={() => {
                            addOwnSkin(skin.name)
                            if(skin.isOwned){
                                console.log('La skin ', skin.name, 'se añadió a obtenidas')
                            }
                        }}
                        onDelete={() => {
                            deleteSkin(skin.name)
                            if(!skin.isOwned && !skin.isWished){
                                console.log('La skin ', skin.name, 'eliminó correctamente')
                            }
                        }}
                    />
                ))}
                <SkinItem />
            </SkinList>
        </React.Fragment>
    );
}

export default App;