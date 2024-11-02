function SkinsMissingButton({showMissingSkins}) {
    return(
        <button
            class="Btn BtnMissing"
            onClick={showMissingSkins}
        >
        </button>
    );
};

export { SkinsMissingButton }