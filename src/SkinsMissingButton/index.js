function SkinsMissingButton({missingSkins}) {
    return(
        <button
            className="missingButton"
            onClick={missingSkins}
        >
            Missing
        </button>
    );
};

export { SkinsMissingButton }