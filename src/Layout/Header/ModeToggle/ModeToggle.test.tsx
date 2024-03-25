import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";

import ModeToggle from "./ModeToggle";

test("should display toggle", () => {
  
    const { debug, getByTestId } = render(
      <ModeToggle />
    );
    expect(getByTestId("theme-toggle")).toBeTruthy();
    //debug();
});