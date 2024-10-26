import './SkinAsset.css'

function SkinAsset() {
    const images = [];

    for (let i = 1; i < 6; i++){
        images.push(require(`../Assets/image(${i}).jpg`))
    };

    return(
        images.map((src, index) => (
            <img 
                className='skin-image'
                key={index}
                src={src}
                alt={`Skin ${index + 1}`}
            />
        ))
    );
}

export { SkinAsset }