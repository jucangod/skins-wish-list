import React, { useState, useEffect } from "react";

const SkinContext = React.createContext();

const SkinProvider = ({ children }) => {
    // Definición del estado para las diferentes categorías de skins
    const [missingSkins, setMissingSkins] = useState([]);
    const [ownedSkins, setOwnedSkins] = useState([]);
    const [wishedSkins, setWishedSkins] = useState([]);
    const [displayedSkins, setDisplayedSkins] = useState(missingSkins);
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    const [isWishedButtonVisible, setWishedButtonVisible] = useState(true);
    const [isOwnedButtonVisible, setOwnedButtonVisible] = useState(true);
    const [isWishedActive, setIsWishedActive] = useState(false);
    const [isOwnedActive, setIsOwnedActive] = useState(false);
    const [isDeleteActive, setIsDeleteActive] = useState(false);

    // Fetch para obtener las skins faltantes
    useEffect(() => {
        fetch("http://127.0.0.1:8000/skins/missing")
        .then((res) => res.json())
        .then((data) => {
            setMissingSkins(data);
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

    // Actualización de las skins mostradas junto a sus respectivos botones
    const showMissingSkins = (() => {
        setDisplayedSkins(missingSkins);
        setDeleteButtonVisible(false);
        setWishedButtonVisible(true);
        setOwnedButtonVisible(true);
    });

    const showWishedSkins = (() => {
        setDisplayedSkins(wishedSkins);
        setDeleteButtonVisible(true);
        setWishedButtonVisible(false);
        setOwnedButtonVisible(true);
    });

    const showOwnedSkins = (() => {
        setDisplayedSkins(ownedSkins);
        setDeleteButtonVisible(true);
        setWishedButtonVisible(true);
        setOwnedButtonVisible(false);
    });

    //Activar los botones segun se requiera
    const activeDeleteButton = (() => {
        setIsDeleteActive(true);
        setIsOwnedActive(false);
        setIsWishedActive(false);
        console.log('Boton eliminar activado')
    });

    const activeWishedButton = (() => {
        setIsDeleteActive(false);
        setIsOwnedActive(false);
        setIsWishedActive(true);
        console.log('Boton deseado activado')
    });

    const activeOwnedButton = (() => {
        setIsDeleteActive(false);
        setIsOwnedActive(true);
        setIsWishedActive(false);
    });

    const findActiveButton = ((id) => {
        if(isWishedActive) {
            addWishedSkin(id)
        } else if (isOwnedActive) {
            addOwnedSkin(id)
        } else if (isDeleteActive) {
            deleteSkin(id)
        }
    })

    const addWishedSkin = (id) => {
        fetch(`http://127.0.0.1:8000/skins/wished/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al añadir la skin deseada");
            }
            return response.json();
        })
        .then(data => console.log("Skin añadida como deseada:", data))
        .catch(error => console.error("Error al añadir skin deseada:", error));
    };
    

    // Añadir skin obtenida
    const addOwnedSkin = ((id) => {
        fetch(`http://127.0.0.1:8000/skins/owned/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al añadir la skin deseada");
            }
            return response.json();
        })
        .then(data => console.log("Skin añadida como deseada:", data))
        .catch(error => console.error("Error al añadir skin deseada:", error));
    });

    //Eliminar skin
    const deleteSkin = ((id) => {
        fetch(`http://127.0.0.1:8000/skins/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al añadir la skin deseada");
            }
            return response.json();
        })
        .then(data => console.log("Skin añadida como deseada:", data))
        .catch(error => console.error("Error al añadir skin deseada:", error));
    });

    return (
        <SkinContext.Provider
            value={{
                showMissingSkins,
                showOwnedSkins,
                showWishedSkins,
                displayedSkins,
                isDeleteButtonVisible,
                isOwnedButtonVisible,
                isWishedButtonVisible,
                activeDeleteButton,
                activeOwnedButton,
                activeWishedButton,
                findActiveButton
            }}
        >
        {children}
        </SkinContext.Provider>
    );
};

export { SkinProvider, SkinContext }