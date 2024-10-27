import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI'

// const defaultSkins = [
//    {img: require('./Assets/image(1).jpg'), isOwned: false, isWished: false, name: 'image(1)'},
 //   {img: require('./Assets/image(2).jpg'), isOwned: false, isWished: false, name: 'image(2)'},
//    {img: require('./Assets/image(3).jpg'), isOwned: false, isWished: false, name: 'image(3)'},
 //   {img: require('./Assets/image(4).jpg'), isOwned: false, isWished: false, name: 'image(4)'},
//    {img: require('./Assets/image(5).jpg'), isOwned: false, isWished: false, name: 'image(5)'},
// ];

// localStorage.setItem('skins_default', defaultSkins)

function App() {

    const [skin, setSkin] = React.useState('defaultSkins', []);
    const [wishButton, setWishButton] = React.useState(false);
    const [ownButton, setOwnButton] = React.useState(false);
    const [deleteButton, setDeleteButton] = React.useState(false);
    const [activeButton, setActiveButton] = React.useState('');
    const [missingSkin, setMissingSkin] = React.useState([]);
    const [ownedSkin, setOwnedSkin] = React.useState([]);
    const [wishSkin, setWishSkin] = React.useState([]);

    const addWishSkin = (name) => {
        const newWishSkin = [...skin];
        const skinIndex = newWishSkin.findIndex(
            (skin) => skin.name === name
        );
        newWishSkin[skinIndex].isWished = true;
        setSkin(newWishSkin);
        setWishSkin(newWishSkin);
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
    };

    const showMissingList = () => {
        const newSkin = [...skin]
        const missingList = newSkin.filter(
            (skin) => (skin.isWished === false) && (skin.isOwned === false)
        );
        setMissingSkin(missingList);
        console.log(missingList);
    };

    const showWishList = () => {
        const newSkin = [...skin]
        const wishList = newSkin.filter(
            (skin) => skin.isWished === true
        );
        setWishSkin(wishList);
        console.log(wishList);
    };

    const showOwnedList = () => {
        const newSkin = [...skin]
        const ownedList = newSkin.filter(
            (skin) => skin.isOwned === true
        );
        setOwnedSkin(ownedList);
        console.log(ownedList);
    };

    return(
        <AppUI 
        
        />
    );
};

export default App;