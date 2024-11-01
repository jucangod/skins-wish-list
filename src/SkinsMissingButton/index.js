function SkinsMissingButton({showMissingSkins}) {
    return(
        <button
            className="missingButton"
            onClick={showMissingSkins}
        >
            Missing
        </button>
    );
};

export { SkinsMissingButton }