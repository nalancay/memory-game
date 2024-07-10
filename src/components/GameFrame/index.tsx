import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GameBoard from "../GameBoard";
import { resetCards, shuffleCards } from "../../redux/actions";
import { Container, Header, ResetButton } from "./GameFrame.styles";

const GameFrame: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetCards());
  };

  return (
    <Container>
      <Header>Memory Game</Header>
      <GameBoard />
      <ResetButton onClick={handleReset}>Reset Game</ResetButton>
    </Container>
  );
};

export default GameFrame;
