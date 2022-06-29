import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Commits } from "./Commits";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup();
});

test("when fetched empty array - should render 'no records found' message", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });
  const { debug, queryByTestId } = render(<Commits />);
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
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([record]),
  });

  const { debug, getByTestId } = render(<Commits />);
  await waitFor(() => {
    expect(getByTestId("data-table")).toBeInTheDocument();
  });
});

test("should show loader when loading and hide it after request ended", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });
  const { debug, container } = render(<Commits />);
  expect(container.querySelector('svg')).toBeInTheDocument()
  await waitFor(() => {
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })
});
