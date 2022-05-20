import { renderHook } from "@testing-library/react-hooks";
import useFetchData from "./useFetchData"
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([{nm: 'vova'}])
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});
//import { rest } from "msw";
test("should return error if 'url' params not passed", () => {
  const {result} = renderHook(() => useFetchData())
  expect(result.current.error).toBe('must pass url param!');
});
test("should return loading set to 'true' if 'url' params passed", async () => {
  const {result, waitForNextUpdate} = renderHook(() => useFetchData('zzz'))
  expect(result.current.loading).toBeTruthy();
  expect(result.current.error).toBeNull()
  expect(result.current.data).toEqual([])
  await waitForNextUpdate()
});
test("should return data", async () => {
  const {result, waitForNextUpdate} = renderHook(() =>  useFetchData('zzz'))
  await waitForNextUpdate()
  expect(result.current.data).toEqual([{nm: 'vova'}])
});