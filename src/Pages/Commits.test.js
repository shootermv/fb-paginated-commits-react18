import { render, cleanup, waitFor } from '@testing-library/react';
import {Commits} from "./Commits";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup()
});

test("should render some stuff", async () => {
    const { debug, getByTestId } = render(<Commits />);
    const listNode = await waitFor(() => {
        //debug()
        expect(getByTestId('no-data-label').textContent).toContain('no results')
    })
    
});
