function SkinsOwnedButton({showOwnedSkins}) {
    return(
        <button
            className="ownedButton"
            onClick={showOwnedSkins}
        >
            Own
        </button>
    );
};

export { SkinsOwnedButton }