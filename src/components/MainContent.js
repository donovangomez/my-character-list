const MainContent = ({ characterList }) => {
    return(
        <div>
            <h2>This is the main content</h2>
            {characterList.map((character) => (
                <h2>{character.name}</h2>
            ))}
        </div>
    )
}

export default MainContent;