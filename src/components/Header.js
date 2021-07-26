import styled from "styled-components";

const Hero = styled.section`
  border: 2px solid red;
`;

const HeroWrapper = styled.div`
  border: 2px solid blue;
  max-width: 650px;
  margin: 0 auto;
`;

const Header2 = styled.h2`
  font-size: 3rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
`;

const SearchWrapper = styled.div`
  border: 2px solid green;
`;

const Input = styled.input`
  padding: 0.25rem;
`;

const Header = ({ handleSearch, search, setSearch }) => {
  return (
    <Hero>
      <header>
        <HeroWrapper>
          <Header2>AnimeCharacterDB</Header2>
          <Paragraph>Biscuits</Paragraph>
          <form onSubmit={handleSearch}>
            <SearchWrapper>
              <Input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button>Search</button>
            </SearchWrapper>
          </form>
        </HeroWrapper>
      </header>
    </Hero>
  );
};

export default Header;
