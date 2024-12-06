import { test } from '@playwright/test';

test('wikipedia cats', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('cats');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('heading', { name: 'Cat', exact: true }).locator('span').click();
  await page.locator('#toc-Behavior').getByRole('link', { name: 'Behavior' }).click();
  await page.getByRole('link', { name: 'Fighting', exact: true }).click();
  await page.getByText('Among domestic cats, males').click();
  await page.getByText('Dark', { exact: true }).click();
  await page.getByText('Automatic').click();
  await page.getByText('Light', { exact: true }).click();
  await page.getByText('Dark', { exact: true }).click();
});