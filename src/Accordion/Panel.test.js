import { render, fireEvent } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { marked } from "marked";
import Panel from "./Panel";

describe("Panel", () => {
  test("panel should contain title text", () => {
    let title = "hi";

    const { debug, getByTestId } = render(<Panel title={title}>vasi</Panel>);
    expect(getByTestId("panel-wrap").textContent).toContain(title);
  });

  test("panel should NOT show content text if it closed", () => {
    let title = "hi";
    let child = "vova";
    const { debug, getByTestId } = render(
      <div className="accordion">
        <Panel title={title}>{child}</Panel>
      </div>
    );
    expect(getByTestId("panel-main").className).not.toBe("open");
    //debug()
  });

  test("panel should show content text if it open", () => {
    let title = "hi";
    let child = "vovachka";
    let open = true;
    const { debug, getByTestId } = render(
      <div className="accordion">
        <Panel title={title} open={open}>
          {child}
        </Panel>
      </div>
    );
    expect(getByTestId("panel-main").className).toBe("open");
    // debug()
  });

  test("panel should call setPanelOpen func when header clicked", () => {
    let title = "hi";
    let child = "vovachka";
    let setOpen = vi.fn();
    const { debug, getByTestId } = render(
      <div className="accordion">
        <Panel title={title} setPanelOpen={setOpen}>
          {child}
        </Panel>
      </div>
    );
    fireEvent.click(getByTestId("panel-header"));
    expect(setOpen).toHaveBeenCalled();
    //debug()
  });
  test("panel should call setPanelOpen func whith correct params", () => {
    let title = "hi";
    let child = "vovachka";
    let idx = 2;
    let setOpen = vi.fn();
    const { debug, getByTestId } = render(
      <div className="accordion">
        <Panel title={title} setPanelOpen={setOpen} panelIdx={idx}>
          {child}
        </Panel>
      </div>
    );
    fireEvent.click(getByTestId("panel-header"));
    expect(setOpen).toHaveBeenCalledWith(idx);
    //debug()
  });

  test("panel should show HTML content if it open", () => {
    let title = "hi";
    let html = marked(`\r\n add tests!`);
    let child = <div dangerouslySetInnerHTML={{ __html: html }} />;
    let open = true;
    const { debug, getByTestId } = render(
      <div className="accordion">
        <Panel title={title} open={open}>
          {child}
        </Panel>
      </div>
    );
    expect(getByTestId("panel-main").textContent).toContain("add tests!");
    // debug()
  });
});
