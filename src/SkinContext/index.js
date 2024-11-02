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

    // Función para obtener todas las skins
    const fetchData = async () => {
        try {
            const missingResponse = await fetch("http://127.0.0.1:8000/skins/missing");
            const missingData = await missingResponse.json();
            setMissingSkins(missingData);

            const ownedResponse = await fetch("http://127.0.0.1:8000/skins/owned");
            const ownedData = await ownedResponse.json();
            setOwnedSkins(ownedData);

            const wishedResponse = await fetch("http://127.0.0.1:8000/skins/wished");
            const wishedData = await wishedResponse.json();
            setWishedSkins(wishedData);

            // Establece las missingSkins como las mostradas por defecto
            setDisplayedSkins(missingData);
        } catch (error) {
            console.error("Error al cargar las skins:", error);
        }
    };

    // Ejecuta fetchData cuando el componente se monta
    useEffect(() => {
        fetchData();
    }, []);

    // Actualización de las skins mostradas junto a sus respectivos botones
    const showMissingSkins = () => {
        setDisplayedSkins(missingSkins);
        setDeleteButtonVisible(false);
        setWishedButtonVisible(true);
        setOwnedButtonVisible(true);
    };

    const showWishedSkins = () => {
        setDisplayedSkins(wishedSkins);
        setDeleteButtonVisible(true);
        setWishedButtonVisible(false);
        setOwnedButtonVisible(true);
    };

    const showOwnedSkins = () => {
        setDisplayedSkins(ownedSkins);
        setDeleteButtonVisible(true);
        setWishedButtonVisible(true);
        setOwnedButtonVisible(false);
    };

    // Activar y desactivar boton eliminar
    const toggleDeleteButton = () => {
        setIsDeleteActive((prevState) => {
            const newState = !prevState;
            console.log(`Boton eliminar ${newState ? "activado" : "desactivado"}`);
            return newState;
        });
        setIsOwnedActive(false);
        setIsWishedActive(false);
    };

    // Activar y desactivar boton deseado
    const toggleWishedButton = () => {
        setIsWishedActive((prevState) => {
            const newState = !prevState;
            console.log(`Boton deseado ${newState ? "activado" : "desactivado"}`);
            return newState;
        });
        setIsDeleteActive(false);
        setIsOwnedActive(false);
    };

    // Activar y desactivar boton obtenido
    const toggleOwnedButton = () => {
        setIsOwnedActive((prevState) => {
            const newState = !prevState;
            console.log(`Boton obtenido ${newState ? "activado" : "desactivado"}`);
            return newState;
        });
        setIsDeleteActive(false);
        setIsWishedActive(false);
    };

    const findActiveButton = (id) => {
        if (isWishedActive) {
            addWishedSkin(id);
        } else if (isOwnedActive) {
            addOwnedSkin(id);
        } else if (isDeleteActive) {
            deleteSkin(id);
        }
    };

    // Añadir skin deseada
    const addWishedSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/wished/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Error al añadir la skin deseada");
            }
            console.log("Skin añadida como deseada");
            fetchData(); // Refresca los datos después de añadir
        } catch (error) {
            console.error("Error al añadir skin deseada:", error);
        }
    };

    // Añadir skin obtenida
    const addOwnedSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/owned/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Error al añadir la skin obtenida");
            }
            console.log("Skin añadida como obtenida");
            fetchData(); // Refresca los datos después de añadir
        } catch (error) {
            console.error("Error al añadir skin obtenida:", error);
        }
    };

    // Eliminar skin
    const deleteSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Error al eliminar la skin");
            }
            console.log("Skin eliminada");
            fetchData(); // Refresca los datos después de eliminar
        } catch (error) {
            console.error("Error al eliminar skin:", error);
        }
    };

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
                toggleDeleteButton,
                toggleOwnedButton,
                toggleWishedButton,
                findActiveButton,
            }}
        >
            {children}
        </SkinContext.Provider>
    );
};

export { SkinProvider, SkinContext };