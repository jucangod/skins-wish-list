import "./SkinList.css"

function SkinList({children}){
    return(
        <ul className="SkinList">
            {children}
        </ul>
    );
};

export { SkinList }