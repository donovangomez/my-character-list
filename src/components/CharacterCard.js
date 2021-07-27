import styled from "styled-components";

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

const CharacterCard = ({ name, image, link, key }) => {
  return (
    <Card>
      <CharaImg src={image} />
      <h3>{name}</h3>
    </Card>
  );
};

export default CharacterCard;
