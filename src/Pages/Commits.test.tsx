import { render, cleanup, waitFor, screen } from "@testing-library/react";
import { Commits } from "./Commits";
import { expect, test, beforeEach, afterEach } from "vitest";

beforeEach(() => {
  fetchMock.resetMocks();
});

afterEach(() => {
  cleanup();
});

test("when fetched empty array - should render 'no records found' message", async () => {
  fetchMock.mockResponseOnce(JSON.stringify([]));
  const { queryByTestId } = render(<Commits />);
  await waitFor(() => {
    expect(queryByTestId("no-data-label")?.textContent || "").toContain(
      "no results"
    );
  });
});

test("should render some records", async () => {
  const record = {
    html_url: "hh",
    author: { avatar_url: "uuu", login: "jjj" },
    commit: { committer: { date: "2022-04-03T01:41:49Z" }, message: "jo" },
  };
  fetchMock.mockResponseOnce(JSON.stringify([record]));

  render(<Commits />);
  await waitFor(() => {
    expect(screen.getByTestId("data-table")).toBeTruthy();
  });
});

test("should show loader when loading and hide it after request ended", async () => {
  fetchMock.mockResponseOnce(JSON.stringify([]));
  const { container } = render(<Commits />);
  expect(container.querySelector("svg")).toBeTruthy();
  await waitFor(() => {
    expect(container.querySelector("svg")).not.toBeTruthy();
  });
});
