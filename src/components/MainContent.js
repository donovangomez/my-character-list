import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterResults = styled.section`
  border: 2px solid green;
  padding: 3rem 0;
`;

const Wrapper = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SearchHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const MainContent = ({ characterList }) => {
  return (
    <CharacterResults>
      <SearchHeader>Search Results</SearchHeader>
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
    </CharacterResults>
  );
};

export default MainContent;
