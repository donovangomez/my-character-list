import styled from "styled-components";
import { FaExternalLinkAlt, FaHeart } from "react-icons/fa";

const Card = styled.div`
  width: 24rem;
  display: flex;
  background-color: #fff;
  padding: 1rem;
`;

const CharaImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
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
  width: 35%;
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
