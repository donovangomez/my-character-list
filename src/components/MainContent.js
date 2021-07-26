import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const MainContent = ({ characterList }) => {
  return (
    <div>
      <h2>This is the main content</h2>
      <Wrapper>
        {characterList.map((character) => (
          <CharacterCard
            name={character.name}
            image={character.image_url}
            link={character.link}
            key={character.mal_id}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default MainContent;
