function SkinsWishedButton({showWishedSkins}) {
    return(
        <button
            class="Btn BtnWished"
            onClick={showWishedSkins}
        >
            Wish
        </button>
    );
};

export { SkinsWishedButton }