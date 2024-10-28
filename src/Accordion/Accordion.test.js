
import { render, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import Panel from "./Panel";
import Accordion from "./Accordion";
describe("Accordion", () => {
  test("accordion should contain a panel", () => {
    let title = "hi";
    let panel = <Panel title={title}>vasili</Panel>;
    const { debug, getByTestId } = render(<Accordion>{panel}</Accordion>);
    expect(getByTestId("panel-wrap")).toBeTruthy();
    expect(getByTestId("panel-wrap").textContent).toContain(title);
  });
});
