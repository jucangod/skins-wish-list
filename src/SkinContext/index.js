import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const SkinContext = React.createContext();

function SkinProvider({children}) {
    const {
        item: skin,
        saveItem: saveSkin
    } = useLocalStorage('defaultSkins', []);

    const [wishButton, setWishButton] = React.useState(false);
    const [ownButton, setOwnButton] = React.useState(false);
    const [deleteButton, setDeleteButton] = React.useState(false);
    const [activeButton, setActiveButton] = React.useState('');
    const [missingSkin, setMissingSkin] = React.useState([]);
    const [ownedSkin, setOwnedSkin] = React.useState([]);
    const [wishSkin, setWishSkin] = React.useState([]);

    // Toggle de los botones
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

    const toggleDeleteButton = () => {
        if (ownButton || wishButton) {
            setOwnButton(false);
            setWishButton(false);
            setDeleteButton((prev) => !prev);
        }
        console.log(deleteButton, ownButton, wishButton);
        setActiveButton('delete');
        console.log('El boton activo es delete');
    };

    //Añadir sus propiedades respectivas de las skins
    const addWishSkin = (name) => {
        const newWishSkin = [...skin];
        const skinIndex = newWishSkin.findIndex(
            (skin) => skin.name === name
        );
        newWishSkin[skinIndex].isWished = true;
        saveSkin(newWishSkin);
    }

    const addOwnSkin = (name) => {
        const newOwnSkin = [...skin];
        const skinIndex = newOwnSkin.findIndex(
            (skin) => skin.name === name
        );
        newOwnSkin[skinIndex].isOwned = true;
        saveSkin(newOwnSkin)
    }

    const deleteSkin = (name) => {
        const newDeleteSkin = [...skin];
        const skinIndex = newDeleteSkin.findIndex(
            (skin) => skin.name === name
        );
        newDeleteSkin[skinIndex].isWished = false;
        newDeleteSkin[skinIndex].isOwned = false;
        saveSkin(newDeleteSkin)
    }

    //Detectar el botón activo
    const findActiveButton = () => {
        switch(activeButton){
            case 'wish':
                addWishSkin();
                break;
            case 'own':
                addOwnSkin();
                break;
            case 'delete':
                deleteSkin();
                break;
        }
    }

    return(
        <SkinContext.Provider
            value={{
                toggleWishButton,
                toggleOwnButton,
                toggleDeleteButton,
                addOwnSkin,
                addWishSkin,
                deleteSkin,
                findActiveButton
            }}
        >
            {children}
        </SkinContext.Provider>
    );
};

export { SkinContext, SkinProvider };