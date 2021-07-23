import CharacterCard from './CharacterCard'

const MainContent = ({ characterList }) => {
    return(
        <div>
            <h2>This is the main content</h2>
            {characterList.map((character) => (
                <CharacterCard 
                  name={character.name}
                  image={character.image_url}
                  link={character.link}
                  id={character.mal_id}
                />
            ))}
        </div>
    )
}

export default MainContent;