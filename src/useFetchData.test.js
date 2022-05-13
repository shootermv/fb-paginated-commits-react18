import { renderHook } from "@testing-library/react-hooks";
import useFetchData from "./useFetchData"
//import { rest } from "msw";
test("should return error if 'url' params not passed", () => {
  const {result} = renderHook(() => useFetchData())
  expect(result.current.error).toBe('must pass url param!');
});
test("should return loading set to 'true' if 'url' params passed", () => {
  const {result} = renderHook(() => useFetchData('zzz'))
  expect(result.current.loading).toBeTruthy();
  expect(result.current.error).toBeNull()
  expect(result.current.data).toEqual([])
});