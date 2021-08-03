import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Hero = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #667db6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
`;

const HeroWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  text-align: left;
`;

const Header2 = styled.h2`
  font-size: 3rem;
  margin: 1rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin: 1rem;
`;

const SearchWrapper = styled.div`
  width: 50%;
  position: relative;
  margin: 1rem;
`;

const Input = styled.input`
  padding: 0.45rem;
  width: 100%;
  transition: outline 0.2s ease-in;
  border: none;

  &:focus {
    outline: 2px solid #ec6ead;
  }
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  right: 0;
  height: 100%;
  font-size: 1.15rem;
  padding: 0.35rem;
  cursor: pointer;
  transition: color 0.2s ease-in;

  &:hover {
    color: #ec6ead;
  }
`;

const Header = ({ handleSearch, search, setSearch }) => {
  return (
    <Hero>
      <header>
        <HeroWrapper>
          <Header2>AnimeCharacterDB</Header2>
          <Paragraph>
            Search for your favorite
            <br />
            anime characters
          </Paragraph>
          <form onSubmit={handleSearch}>
            <SearchWrapper>
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Try Riko Sakurauchi"
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
