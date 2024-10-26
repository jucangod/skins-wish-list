import { SkinAsset } from "../SkinAsset";

function SkinList({ children }) {
    return(
        <ul className='SkinList'>
            {children}
        </ul>
    );
}

export { SkinList }