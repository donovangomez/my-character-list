import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterResults = styled.section`
  padding: 3rem 0;
  min-height: 60vh;
  background-color: #eff4f7;
`;

const Wrapper = styled.div`
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
      {!characterList ? (
        <SearchHeader>Nothing Found :(</SearchHeader>
      ) : (
        <div>
          <SearchHeader>Results</SearchHeader>
          <Wrapper>
            {characterList.map((character) => (
              <CharacterCard
                name={character.name}
                image={character.image_url}
                link={character.url}
                key={character.mal_id}
              />
            ))}
          </Wrapper>
        </div>
      )}
    </CharacterResults>
  );
};

export default MainContent;
