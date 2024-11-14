import { test, expect } from "@playwright/test";

test("Home page job and salary category buttons functionality", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  const jobCategoryButtonsId = await page.locator("#jobs-category-buttons");
  const salaryCategoryButtonsId = await page.locator(
    "#salary-category-buttons"
  );

  const jobCategoryButtons = jobCategoryButtonsId.filter({
    hasText: /frontend|backend|fullstack/i,
  });

  const salaryCategoryButtons = salaryCategoryButtonsId.filter({
    hasText: /frontend|backend|fullstack/i,
  });

  // check buttons render on page
  await expect(jobCategoryButtons).toHaveCount(3);
  await expect(salaryCategoryButtons).toHaveCount(3);

  await expect(jobCategoryButtons.nth(0)).toHaveText("frontend");
  await expect(jobCategoryButtons.nth(1)).toHaveText("backend");
  await expect(jobCategoryButtons.nth(2)).toHaveText("fullstack");

  await expect(salaryCategoryButtons.nth(0)).toHaveText("frontend");
  await expect(salaryCategoryButtons.nth(1)).toHaveText("backend");
  await expect(salaryCategoryButtons.nth(2)).toHaveText("fullstack");

  const jobCategoryFrontendButton = jobCategoryButtonsId.filter({
    hasText: /frontend/i,
  });

  const jobCategoryBackendButton = jobCategoryButtonsId.filter({
    hasText: /backend/i,
  });

  const jobCategoryFullstackButton = jobCategoryButtonsId.filter({
    hasText: /fullstack/i,
  });

  const salaryCategoryFrontendButton = salaryCategoryButtonsId.filter({
    hasText: /frontend/i,
  });

  const salaryCategoryBackendButton = salaryCategoryButtonsId.filter({
    hasText: /backend/i,
  });

  const salaryCategoryFullstackButton = salaryCategoryButtonsId.filter({
    hasText: /fullstack/i,
  });

  // check active buttons
  await expect(jobCategoryFrontendButton).toHaveClass(/bg-gray-800/);

  await jobCategoryBackendButton.click();
  await expect(jobCategoryBackendButton).toHaveClass(/bg-gray-800/);
  await expect(jobCategoryFrontendButton).toHaveClass(/text-gray-600/);

  await jobCategoryFullstackButton.click();
  await expect(jobCategoryFullstackButton).toHaveClass(/bg-gray-800/);
  await expect(jobCategoryBackendButton).toHaveClass(/text-gray-600/);

  await expect(salaryCategoryFrontendButton).toHaveClass(/bg-gray-800/);

  await salaryCategoryBackendButton.click();
  await expect(salaryCategoryBackendButton).toHaveClass(/bg-gray-800/);
  await expect(salaryCategoryFrontendButton).toHaveClass(/text-gray-600/);

  await salaryCategoryFullstackButton.click();
  await expect(salaryCategoryFullstackButton).toHaveClass(/bg-gray-800/);
  await expect(salaryCategoryBackendButton).toHaveClass(/text-gray-600/);

  // check data on page when category changes
  await jobCategoryFrontendButton.click();
  const jobTitle = await page.getByRole("heading", {
    name: /Front-End Development Jobs|Back-End Development Jobs|Full-Stack Development Jobs/i,
  });
  await expect(jobTitle).toBeVisible();

  await jobCategoryBackendButton.click();
  await expect(jobTitle).toBeVisible();

  await jobCategoryFullstackButton.click();
  await expect(jobTitle).toBeVisible();

  await salaryCategoryFrontendButton.click();
  const salaryTitle = await page.getByRole("heading", {
    name: /Front-End Development Salaries|Back-End Development Salaries|Full-Stack Development Salaries/i,
  });
  await expect(salaryTitle).toBeVisible();

  await salaryCategoryBackendButton.click();
  await expect(jobTitle).toBeVisible();

  await salaryCategoryFullstackButton.click();
  await expect(jobTitle).toBeVisible();
});

test("Navigate to Jobs details page after clicking a job to view", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // navigate to job details page
  const buttonId = await page.locator("#details-button");

  const viewDetailsButton = buttonId.filter({
    hasText: /view details/i,
  });

  await viewDetailsButton.nth(0).click();
  await expect(page).toHaveURL(/\/jobs\/frontend/);
});
