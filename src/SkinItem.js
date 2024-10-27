function SkinItem(props) {
    return(
        <img
            src={props.img}
            alt={props.name}
            onClick={() => {
                switch(props.activeButton) {
                    case 'wish':
                        props.onWish();
                        break;
                    case 'own':
                        props.onOwn();
                        break;
                    case 'delete':
                        props.onDelete();
                        break;
                }
            }}
        />
    );
};

export { SkinItem }