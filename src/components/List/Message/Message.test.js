import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "./Message";

test("should display message text", () => {
  let title = "hi";

  const { debug, getByTestId } = render(
    <Message title={title} term="" link="" />
  );
  expect(getByTestId("commit-message").textContent).toContain(title);
  //debug();
});
test("should display 'show more' after end of long message", () => {
  let title = new Array(101).fill("1").join("");

  const { debug, getByTestId } = render(
    <Message title={title} term="" link="" />
  );
  expect(getByTestId("commit-message").textContent).not.toContain(title);
  expect(getByTestId("show-more")).toBeVisible();
  //debug();
});
test("after clicking 'show more' should show full text", () => {
  let title = new Array(101).fill("1").join("");

  const { debug, getByTestId } = render(
    <Message title={title} term="" link="" />
  );
  fireEvent.click(getByTestId("show-more"));
  expect(getByTestId("commit-message").textContent).toContain(title);
  expect(getByTestId("show-more").textContent).toBe(" less");
  //debug();
});
