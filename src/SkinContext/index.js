import React, { useState, useEffect } from "react";

const SkinContext = React.createContext();

const SkinProvider = ({ children }) => {
    // Definición del estado para las diferentes categorías de skins
    const [missingSkins, setMissingSkins] = useState([]);
    const [ownedSkins, setOwnedSkins] = useState([]);
    const [wishedSkins, setWishedSkins] = useState([]);
    const [displayedSkins, setDisplayedSkins] = useState(missingSkins);
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(true);
    const [isWishedButtonVisible, setWishedButtonVisible] = useState(true);
    const [isOwnedButtonVisible, setOwnedButtonVisible] = useState(true);

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

    // Actualización de las skins mostradas
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

    return (
        <SkinContext.Provider
            value={{
                showMissingSkins,
                showOwnedSkins,
                showWishedSkins,
                displayedSkins,
                isDeleteButtonVisible,
                isOwnedButtonVisible,
                isWishedButtonVisible
            }}
        >
        {children}
        </SkinContext.Provider>
    );
};

export { SkinProvider, SkinContext }