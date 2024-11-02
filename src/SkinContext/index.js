import React, { useState, useEffect } from "react";

const SkinContext = React.createContext();

const SkinProvider = ({ children }) => {
    const [missingSkins, setMissingSkins] = useState([]);
    const [ownedSkins, setOwnedSkins] = useState([]);
    const [wishedSkins, setWishedSkins] = useState([]);
    const [displayedSkins, setDisplayedSkins] = useState([]);
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    const [isWishedButtonVisible, setWishedButtonVisible] = useState(true);
    const [isOwnedButtonVisible, setOwnedButtonVisible] = useState(true);
    const [isWishedActive, setIsWishedActive] = useState(false);
    const [isOwnedActive, setIsOwnedActive] = useState(false);
    const [isDeleteActive, setIsDeleteActive] = useState(false);

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

            // Default display to missing skins
            setDisplayedSkins(missingData);
        } catch (error) {
            console.error("Error al cargar las skins:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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

    const toggleDeleteButton = () => {
        setIsDeleteActive((prevState) => !prevState);
        setIsOwnedActive(false);
        setIsWishedActive(false);
    };

    const toggleWishedButton = () => {
        setIsWishedActive((prevState) => !prevState);
        setIsDeleteActive(false);
        setIsOwnedActive(false);
    };

    const toggleOwnedButton = () => {
        setIsOwnedActive((prevState) => !prevState);
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

    const addWishedSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/wished/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error("Error al añadir la skin deseada");

            const updatedMissingSkins = missingSkins.filter(skin => skin.id !== id);
            const addedSkin = missingSkins.find(skin => skin.id === id);
            setMissingSkins(updatedMissingSkins);
            setWishedSkins([...wishedSkins, addedSkin]);
            setDisplayedSkins(updatedMissingSkins);
        } catch (error) {
            console.error("Error al añadir skin deseada:", error);
        }
    };

    const addOwnedSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/owned/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error("Error al añadir la skin obtenida");

            const updatedMissingSkins = missingSkins.filter(skin => skin.id !== id);
            const addedSkin = missingSkins.find(skin => skin.id === id);
            setMissingSkins(updatedMissingSkins);
            setOwnedSkins([...ownedSkins, addedSkin]);
            setDisplayedSkins(updatedMissingSkins);
        } catch (error) {
            console.error("Error al añadir skin obtenida:", error);
        }
    };

    const deleteSkin = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/skins/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error("Error al eliminar la skin");

            const updatedSkins = displayedSkins.filter(skin => skin.id !== id);
            setDisplayedSkins(updatedSkins);

            if (isWishedActive) {
                setWishedSkins(prev => prev.filter(skin => skin.id !== id));
            } else if (isOwnedActive) {
                setOwnedSkins(prev => prev.filter(skin => skin.id !== id));
            } else {
                setMissingSkins(prev => prev.filter(skin => skin.id !== id));
            }
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