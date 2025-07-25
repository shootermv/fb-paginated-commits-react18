import { renderHook, waitFor } from "@testing-library/react";
import useFetchData from "./useFetchData";
import { expect, test, beforeEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();
const mockData = [{ nm: "vova" }];
beforeEach(() => {
  fetchMocker.resetMocks();
  fetchMocker.mockResponseOnce(JSON.stringify(mockData));
});

test("should return error when 'url' param not passed", () => {
  const { result } = renderHook(() => useFetchData());
  expect(result.current.error).toBe("must pass url param!");
});

test("should return loading set to 'true' when 'url' param passed", async () => {
  const { result } = renderHook(() => useFetchData("zzz"));
  expect(result.current.loading).toBeTruthy();
  expect(result.current.error).toBeNull();
  expect(result.current.data).toEqual([]);
});
test("should return data", async () => {
  const { result } = renderHook(() => useFetchData("zzz"));
  await waitFor(() => expect(result.current.data).toMatchObject(mockData));
});
