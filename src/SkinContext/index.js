import React, { useState, useEffect } from "react";

const SkinContext = React.createContext();

const SkinProvider = ({ children }) => {
    // Definición del estado para las diferentes categorías de skins
    const [missingSkins, setMissingSkins] = useState([]);
    const [ownedSkins, setOwnedSkins] = useState([]);
    const [wishedSkins, setWishedSkins] = useState([]);
    const [displayedSkins, setDisplayedSkins] = useState([]);

    // Fetch para obtener las skins faltantes
    useEffect(() => {
        fetch("http://127.0.0.1:8000/skins/missing")
        .then((res) => res.json())
        .then((data) => {
            setMissingSkins(data);
            setDisplayedSkins(data); // Muestra las skins faltantes por defecto
        });
    }, []);

    // Fetch para obtener las skins obtenidas
    useEffect(() => {
        fetch("http://127.0.0.1:8000/skins/owned")
        .then((res) => res.json())
        .then((data) => setOwnedSkins(data));
    }, []);

  // Fetch para obtener las skins deseadas
  useEffect(() => {
    fetch("http://127.0.0.1:8000/skins/wished")
      .then((res) => res.json())
      .then((data) => setWishedSkins(data));
  }, []);

  // Actualización de las skins mostradas
  const showMissingSkins = () => setDisplayedSkins(missingSkins);
  const showWishedSkins = () => setDisplayedSkins(wishedSkins);
  const showOwnedSkins = () => setDisplayedSkins(ownedSkins);

  return (
    <SkinContext.Provider
      value={{
        showMissingSkins,
        showOwnedSkins,
        showWishedSkins,
        displayedSkins,
      }}
    >
      {children}
    </SkinContext.Provider>
  );
};

export { SkinProvider, SkinContext }

// export { SkinProvider, SkinContext };

// import { useLocalStorage } from "./useLocalStorage";

// function SkinProvider({children}) {
//     const {
//         item: skin,
//         saveItem: saveSkin,
//     } = useLocalStorage('skins', []);

//     // const [wishButton, setWishButton] = React.useState(false);
//     // const [ownButton, setOwnButton] = React.useState(false);
//     // const [deleteButton, setDeleteButton] = React.useState(false);
//     // const [activeButton, setActiveButton] = React.useState('');

//     // // Toggle de los botones para añadir propiedades
//     // const toggleWishButton = () => {
//     //     if (ownButton || deleteButton) {
//     //         setOwnButton(false);
//     //         setDeleteButton(false);
//     //         setOwnButton((prev) => !prev);
//     //     }
//     //     console.log(wishButton, ownButton, deleteButton);
//     //     setActiveButton('wish');
//     //     console.log('El boton activo es Wish');
//     // }

//     // const toggleOwnButton = () => {
//     //     if (deleteButton || wishButton) {
//     //         setDeleteButton(false);
//     //         setWishButton(false);
//     //         setOwnButton((prev) => !prev);
//     //     }
//     //     console.log(ownButton, wishButton, deleteButton);
//     //     setActiveButton('own');
//     //     console.log('El boton activo es own');
//     // }

//     // const toggleDeleteButton = () => {
//     //     if (ownButton || wishButton) {
//     //         setOwnButton(false);
//     //         setWishButton(false);
//     //         setDeleteButton((prev) => !prev);
//     //     }
//     //     console.log(deleteButton, ownButton, wishButton);
//     //     setActiveButton('delete');
//     //     console.log('El boton activo es delete');
//     // };

//     // //Aqui se maneja la logica para saber cuál es el boton presionado
//     // const toggleButtons = (event) => {
//     //     const classNameButton = event.target.className
//     //     switch(classNameButton){
//     //         case 'AddWishedSkinButton':
//     //             toggleWishButton()
//     //             break;
//     //         case 'AddOwnedSkinButton':
//     //             toggleOwnButton();
//     //             break;
//     //         case 'DeleteSkinsButton':
//     //             toggleDeleteButton();
//     //             break;
//     //         default:
//     //             console.log('No se seleccionó ningun boton')
//     //             break;
//     //     }
//     // }

//     // //Aqui se maneja la logica para saber cuál es el boton presionado
//     // const findActiveButton = (name) => {
//     //     switch(activeButton){
//     //         case 'wish':
//     //             addWishSkin(name)
//     //             break;
//     //         case 'own':
//     //             addOwnSkin(name);
//     //             break;
//     //         case 'delete':
//     //             deleteSkin(name);
//     //             break;
//     //     }
//     // }

//     //Añadir sus propiedades respectivas de las skins
//     // const addWishSkin = (name) => {
        
//     // }

//     // const addOwnSkin = (name) => {
        
//     // }

//     // const deleteSkin = (name) => {
        
//     // }

//     // Skins faltantes
//     const missingSkins = skin.filter(
//         skin => !skin.isOwned && !skin.isWished
//     );

//     // Skins Deseadas
//     const wishedSkins = skin.filter(
//         skin => !skin.isOwned && skin.isWished
//     );

//     // Skins faltantes
//     const ownedSkins = skin.filter(
//         skin => skin.isOwned && !skin.isWished
//     );

//     return(
//         <SkinContext.Provider
//             value={{
//                 // toggleButtons,
//                 // findActiveButton,
//                 missingSkins,
//                 wishedSkins,
//                 ownedSkins,
//             }}
//         >
//             {children}
//         </SkinContext.Provider>
//     );
// };

// export { SkinContext, SkinProvider };