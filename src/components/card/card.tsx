import React from "react";
import styled, { CSSObject } from "styled-components";
import Character from "../../characters/interfaces/character/character";
import Paragraph from "../../components/paragraph/paragraph";
import List from "../list/list";
import Episode from "../../characters/interfaces/character/episode";

interface ICardProps {
  style?: CSSObject;
  character: Character;
}

const StyledImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const StyledArticle = styled.article`
  padding: 2em;
  background: rgb(60, 62, 68);
  border-radius: 4px;
  box-shadow: 1px -1px 20px -8px rgba(0, 0, 0, 0.75);
  height: 20em;
  overflow: auto;
`;

const Card = ({ character, style }: ICardProps) => {
  const {
    name,
    image,
    status,
    type,
    gender,
    origin,
    species,
    location,
    episodes,
  } = character;

  const mappedEpisodes = episodes.map((item: Episode) => item.name);

  return (
    <StyledArticle tabIndex={0} style={{ ...style }}>
      <div>
        <StyledImg src={image} alt={name} />
      </div>

      <div>
        <Paragraph title="Name:" text={name} />
        <Paragraph title="Status:" text={status} />
        <Paragraph title="Type:" text={type} />
        <Paragraph title="Gender:" text={gender} />
        <Paragraph title="Origin:" text={origin.name} />
        <Paragraph title="Species:" text={species} />

        <div>
          <Paragraph text="Location" underline />
          <Paragraph title="Name:" text={location.name} />
          <Paragraph
            title="Residents:"
            text={location.residents ? String(location.residents.length) : ""}
          />
          <Paragraph title="Dimension:" text={location.dimension} />
          <Paragraph title="Type:" text={location.type} />

          <div>
            <Paragraph text="Episodes" underline />
            <List items={mappedEpisodes} />
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};
export default Card;
