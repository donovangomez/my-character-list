const CharacterCard = ( {name, image, link, key} ) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}

export default CharacterCard;