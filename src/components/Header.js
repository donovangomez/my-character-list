import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

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
  width: 35%;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.input`
  padding: 0.25rem;
  width: 100%;
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  right: 0;
  height: 100%;
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
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <Button>
                <FaSearch />
              </Button>
            </SearchWrapper>
          </form>
        </HeroWrapper>
      </header>
    </Hero>
  );
};

export default Header;
