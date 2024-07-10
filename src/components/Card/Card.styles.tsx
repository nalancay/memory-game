import styled from "styled-components";

export const CardContainer = styled.div<{
  isFlipped: boolean;
  isMatched: boolean;
}>`
  width: 85px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isMatched }) => (isMatched ? "green" : "blue")};
  color: white;
  font-size: 2rem;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ isMatched }) =>
      isMatched ? "darkgreen" : "darkblue"};
  }
`;
