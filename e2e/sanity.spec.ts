import { test, expect } from "@playwright/test";
test.describe("sanity", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });
  
  test('should have title "Recent Commits"', async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Recent Commits" })
    ).toBeVisible();
    expect(page).toHaveTitle(/React News!/);
  });

  test("should have 5 rows in table", async ({ page }) => {
    await expect(page.getByTestId("data-table-row")).toHaveCount(5);
  });

  test("should navigate to Prs page", async ({ page }) => {
    await page.getByRole("link", { name: "Prs" }).click();
    await expect(
      page.getByRole("heading", { name: "Pull Requests" })
    ).toBeVisible();
  });
});
