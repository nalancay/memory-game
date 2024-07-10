import React from "react";
import { CardContainer } from "./Card.styles";
import { ICard } from "./Card.types";

const Card: React.FC<ICard> = ({ value, isFlipped, isMatched, onClick }) => {
  return (
    <CardContainer
      onClick={onClick}
      isFlipped={isFlipped}
      isMatched={isMatched}
    >
      {isFlipped || isMatched ? value : "❓"}
    </CardContainer>
  );
};

export default Card;
