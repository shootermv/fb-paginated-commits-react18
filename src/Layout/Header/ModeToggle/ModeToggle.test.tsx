import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModeToggle from "./ModeToggle";

test("should display toggle", () => {
  
    const { debug, getByTestId } = render(
      <ModeToggle />
    );
    expect(getByTestId("theme-toggle")).toBeInTheDocument();
    //debug();
});