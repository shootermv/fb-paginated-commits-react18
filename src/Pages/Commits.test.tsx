import { render, cleanup, waitFor, screen } from "@testing-library/react";
import { Commits } from "./Commits";

import { expect, test, beforeEach, afterEach, vi } from "vitest";
beforeEach(() => {
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: vi.fn().mockResolvedValue([]),
  } as any);
});

afterEach(() => {
  vi.restoreAllMocks();
  cleanup();
});

test("when fetched empty array - should render 'no records found' message", async () => {
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: vi.fn().mockResolvedValue([]),
  } as any);
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
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: vi.fn().mockResolvedValue([record]),
  } as any);

  const { debug, getByTestId } = render(<Commits />);
  await waitFor( () => {
    expect(screen.getByTestId("data-table")).toBeTruthy();
  });
});

test("should show loader when loading and hide it after request ended", async () => {
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: vi.fn().mockResolvedValue([]),
  } as any);
  const { debug, container } = render(<Commits />);
  expect(container.querySelector("svg")).toBeTruthy();
  await waitFor(() => {
    expect(container.querySelector("svg")).not.toBeTruthy();
  });
});
