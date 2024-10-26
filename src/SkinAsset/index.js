import './Assets'

const images = [];
for (let i = 1; i < 242; i++) {
    images.push(require(`./Assets/image(${i}).jpg`));
}

function SkinAsset() {
    return(
        <div>
            {images.map((image, index) => {
                <img 
                    key={index}
                    src={image}
                    alt={`Skin ${index}`}
                />
            })}
        </div>
    );
}

export { SkinAsset }