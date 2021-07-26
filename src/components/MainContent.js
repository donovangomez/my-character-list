import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid blue;
  display: flex;
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
            id={character.mal_id}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default MainContent;
