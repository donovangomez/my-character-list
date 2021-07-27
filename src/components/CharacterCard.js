import styled from "styled-components";
import { FaExternalLinkAlt, FaHeart } from "react-icons/fa";

const Card = styled.div`
  width: 24rem;
  display: flex;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
`;

const CharaImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  border: 2px solid #ec6ead;
`;

const CharaName = styled.h3`
  font-size: 1.45rem;
  display: block;
`;

const CharaInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  font-size: 1.15rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.15rem;
`;

const CharacterCard = ({ name, image, link, key }) => {
  return (
    <Card>
      <CharaImg src={image} />
      <CharaInfoWrapper>
        <CharaName>{name}</CharaName>
        <ButtonContainer>
          <a href={link} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
          <Button>
            <FaHeart />
          </Button>
        </ButtonContainer>
      </CharaInfoWrapper>
    </Card>
  );
};

export default CharacterCard;
