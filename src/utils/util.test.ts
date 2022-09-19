import { formatMessage } from "./util";

test("pass empty args", () => {
  const showMore = false;
  expect(formatMessage("", "", showMore)).toBe("");
});
test("pass 10 chars long str", () => {
  const showMore = false;
  expect(formatMessage("1".repeat(10), "", showMore).length).toBe(10);
});
test("pass 101 chars long str & showMore=false - should display only 100", () => {
  const showMore = false;
  let str = "1".repeat(101);
  expect(formatMessage(str, "", showMore).length).toBe(100);
});
test("if showMore=true - should display all chars", () => {
  const showMore = true;
  let str = "1".repeat(101);
  expect(formatMessage(str, "", showMore).length).toBe(101);
});
test("pass filter - should wrap term with <b>", () => {
  const showMore = false;
  let str = `changed Transitions type to Array<Transition> (#24249)\n\nChanged the Transitions type to Array<Transition> because Transitions was confusing`;
  const term = "ch";
  expect(formatMessage(str, term, showMore)).toContain("<b");
});
