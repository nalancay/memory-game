import { TYPES_ACTIONS } from "./actions";

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  flippedIndices: number[];
}

const initialState: GameState = {
  cards: [],
  flippedIndices: [],
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const rootReducer = (state = initialState, action: any): GameState => {
  switch (action.type) {
    case TYPES_ACTIONS.SHUFFLE_CARDS:
      const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];
      let cards = shuffleArray([...cardValues, ...cardValues]).map(
        (value, index) => ({
          id: index,
          value,
          isFlipped: false,
          isMatched: false,
        })
      );
      return { ...state, cards, flippedIndices: [] };

    case TYPES_ACTIONS.FLIP_CARD:
      const { cards: currentCards, flippedIndices } = state;
      const flippedCardIndex = action.payload;

      if (
        flippedIndices.includes(flippedCardIndex) ||
        currentCards[flippedCardIndex].isMatched
      ) {
        return state;
      }

      const newCards = currentCards.map((card, index) =>
        index === flippedCardIndex
          ? { ...card, isFlipped: !card.isFlipped }
          : card
      );
      const newFlippedIndices = [...flippedIndices, flippedCardIndex];

      if (newFlippedIndices.length === 2) {
        const [firstIndex, secondIndex] = newFlippedIndices;
        if (newCards[firstIndex].value === newCards[secondIndex].value) {
          newCards[firstIndex].isMatched = true;
          newCards[secondIndex].isMatched = true;
        } else {
          setTimeout(() => {
            newCards[firstIndex].isFlipped = false;
            newCards[secondIndex].isFlipped = false;
          }, 1000);
        }
        return { ...state, cards: newCards, flippedIndices: [] };
      }

      return { ...state, cards: newCards, flippedIndices: newFlippedIndices };

    case TYPES_ACTIONS.RESET_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) => ({
          ...card,
          isFlipped: false,
          isMatched: false,
        })),
        flippedIndices: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
