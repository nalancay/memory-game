import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../Card";
import { GameState } from "../../redux/reducers";
import { flipCard } from "../../redux/actions";
import { Board } from "./GameBoard.styles";

const GameBoard: React.FC = () => {
  const cards = useSelector((state: GameState) => state.cards);
  const dispatch = useDispatch();

  const handleCardClick = (index: number) => {
    const card = cards[index];
    if (!card.isFlipped && !card.isMatched) {
      dispatch(flipCard(index));
    }
  };

  return (
    <Board>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          value={card.value}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </Board>
  );
};

export default GameBoard;
