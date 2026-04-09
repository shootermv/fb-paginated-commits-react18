import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

afterEach(() => {
  cleanup();
});
