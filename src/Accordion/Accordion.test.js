import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Panel from "./Panel";
import Accordion from "./Accordion";
describe("Accordion", () => {
  test("accordion should contain a panel", () => {
    let title = "hi";
    let panel = <Panel title={title}>vasi</Panel>;
    const { debug, getByTestId } = render(<Accordion>{panel}</Accordion>);
    expect(getByTestId("panel-wrap")).toBeInTheDocument();
    expect(getByTestId("panel-wrap").textContent).toContain(title);
  });
});
