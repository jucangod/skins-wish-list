import { SkinAsset } from "../SkinAsset";

function SkinList(props) {
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export { SkinList }