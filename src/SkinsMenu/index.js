import "./SkinsMenu.css"

function SkinsMenu(props) {
    return(
        <header className="skins-menu">
            {props.children}
        </header>
    );
}

export { SkinsMenu }