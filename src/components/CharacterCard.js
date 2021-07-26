import styles from '../styles/CharacterCard.module.css';

const CharacterCard = ( {name, image, link, key} ) => {
    return(
        <div className={styles.card}>
            <h3>{name}</h3>
            <img className={styles.charaImg} src={image} alt={name} />
        </div>
    )
}

export default CharacterCard;