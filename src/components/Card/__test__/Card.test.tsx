import { render, screen, fireEvent } from "@testing-library/react";
import Card from "..";

test("should render card correctly and handle click", () => {
  const mockOnClick = jest.fn();
  render(
    <Card value="A" isFlipped={false} isMatched={false} onClick={mockOnClick} />
  );

  const cardElement = screen.getByText("❓");
  expect(cardElement).toBeInTheDocument();

  fireEvent.click(cardElement);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
