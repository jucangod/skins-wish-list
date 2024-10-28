import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(() => {
        const localStorageItem = localStorage.getItem(itemName);
        
        if (!localStorageItem) {
            const skins = [];
            for (let i = 1; i < 6; i++) {
                skins.push({
                    img: require(`../Assets/image(${i}).jpg`),
                    isWished: false,
                    isOwned: false,
                    name: `Skin ${i}`,
                });
            }
            localStorage.setItem(itemName, JSON.stringify(skins));
            return skins; 
        } 
        
        return JSON.parse(localStorageItem);
    });

    console.log(item)

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
    };
}

export { useLocalStorage }