import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const SkinContext = React.createContext();

function SkinProvider({children}) {
    const {
        item: skin,
        saveItem: saveSkin,
    } = useLocalStorage('defaultSkins', []);

    const [wishButton, setWishButton] = React.useState(false);
    const [ownButton, setOwnButton] = React.useState(false);
    const [deleteButton, setDeleteButton] = React.useState(false);
    const [activeButton, setActiveButton] = React.useState('');
    const [missingSkinsList, setMissingSkinsList] = React.useState([]);
    const [ownedSkinsList, setOwnedSkinsList] = React.useState([]);
    const [wishSkinsList, setWishSkinsList] = React.useState([]);

    // Toggle de los botones para añadir propiedades
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

    //Aqui se maneja la logica para saber cuál es el boton presionado
    const toggleButtons = (event) => {
        const classNameButton = event.target.className
        switch(classNameButton){
            case 'AddWishedSkinButton':
                toggleWishButton()
                break;
            case 'AddOwnedSkinButton':
                toggleOwnButton();
                break;
            case 'DeleteSkinsButton':
                toggleDeleteButton();
                break;
            default:
                console.log('No se seleccionó ningun boton')
                break;
        }
    }

    //Aqui se maneja la logica para saber cuál es el boton presionado
    const findActiveButton = (name) => {
        switch(activeButton){
            case 'wish':
                addWishSkin(name)
                break;
            case 'own':
                addOwnSkin(name);
                break;
            case 'delete':
                deleteSkin(name);
                break;
        }
    }

    //Añadir sus propiedades respectivas de las skins
    const addWishSkin = (name) => {
        const newWishSkin = [...skin];
        const skinIndex = newWishSkin.findIndex(
            (skin) => skin.name === name
        );
        console.log(skinIndex)
        console.log(typeof(newWishSkin[skinIndex]))
        if (skinIndex !== -1) {  
            newWishSkin[skinIndex].isWished = true;
            saveSkin(newWishSkin);
        } else {
            console.error("Skin no encontrada:", name);
        }
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
        if (skinIndex !== -1) {  
            newDeleteSkin[skinIndex].isWished = false;
            newDeleteSkin[skinIndex].isOwned = false;
            saveSkin(newDeleteSkin);
        } else {
            console.error(`No se encontró la skin con el nombre: ${name}`);
        }
    }

    // // Filtrar skins segun se requiera
    // const missingSkins = (name) => {
    //     const newMissingSkin = [...skin]
    //     const missingSkin = newMissingSkin.find(
    //         (skin) => skin.name === name
    //     )
    //     if(missingSkin && !missingSkin.isOwned && !missingSkin.isWished) {
    //         setMissingSkinsList(prevList => [...prevList, missingSkin]);
    //     }
    //     console.log(missingSkinsList)
    // }

    // const wishSkins = () => {
    //     const newWishSkin = [...skin]
    //     const wishList = newWishSkin.filter(
    //         skin => !!skin.isOwned && skin.isWished
    //     )
    //     setWishSkinsList(wishList)
    //     console.log(wishSkinsList)
    // }

    // const ownedSkins = () => {
    //     const newOwnedSkin = [...skin]
    //     const ownedList = newOwnedSkin.filter(
    //         skin => skin.isOwned && !!skin.isWished
    //     )
    //     setOwnedSkinsList(ownedList)
    //     console.log(ownedSkinsList)
    // }
 
    // //Aqui se maneja la logica para saber cuál es el boton seccion presionado
    // const findSection = (event) => {
    //     const classNameButton = event.target.className
    //     switch(classNameButton){
    //         case 'wishButton':
    //             console.log('Presiono el boton de wish')
    //             wishSkins()
    //             break;
    //         case 'ownedButton':
    //             console.log('Presiono el boton de owned')
    //             ownedSkins();
    //             break;
    //         case 'missingButton':
    //             console.log('Presiono el boton de missing')
    //             missingSkins();
    //             break;
    //     }
    // }

    return(
        <SkinContext.Provider
            value={{
                toggleButtons,
                findActiveButton,
                // findSection,
                missingSkinsList,
                ownedSkinsList,
                wishSkinsList,
            }}
        >
            {children}
        </SkinContext.Provider>
    );
};

export { SkinContext, SkinProvider };