export const TYPES_ACTIONS = {
  SHUFFLE_CARDS: "SHUFFLE_CARDS",
  FLIP_CARD: "FLIP_CARD",
  RESET_CARDS: "RESET_CARDS",
};

export const shuffleCards = () => ({
  type: TYPES_ACTIONS.SHUFFLE_CARDS,
});

export const flipCard = (index: number) => ({
  type: TYPES_ACTIONS.FLIP_CARD,
  payload: index,
});

export const resetCards = () => ({
  type: TYPES_ACTIONS.RESET_CARDS,
});
