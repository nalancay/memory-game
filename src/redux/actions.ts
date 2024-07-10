export const SHUFFLE_CARDS = "SHUFFLE_CARDS";
export const FLIP_CARD = "FLIP_CARD";
export const RESET_CARDS = "RESET_CARDS";

export const shuffleCards = () => ({
  type: SHUFFLE_CARDS,
});

export const flipCard = (index: number) => ({
  type: FLIP_CARD,
  payload: index,
});

export const resetCards = () => ({
  type: RESET_CARDS,
});
