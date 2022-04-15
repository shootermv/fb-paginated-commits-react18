import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

test("should display 'no results' if no results passed", () => {
  let commits = [];

  const { debug, getByTestId } = render(<List commits={commits} />);
  expect(getByTestId("no-data-label")).toBeVisible();
  //debug()
});
test("should NOT display 'no results' if some results passed", () => {
  let commits = [
    {
      idx: 1,
      title: "hhh",
      link: "http://www.google.com",
      date: "2022-04-03T01:41:49Z",
      who: {
        login: "hhh",
        avatar_url: "jjj"
      }
    }
  ];

  const { debug, getByTestId } = render(<List commits={commits} />);
  expect(() => getByTestId("no-data-label")).toThrow();
  //debug();
});
