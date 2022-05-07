import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:2368/ghost/#/signin
  await page.goto('http://localhost:2368/ghost/#/signin');

  // Click [placeholder="jamie\@example\.com"]
  await page.locator('[placeholder="jamie\\@example\\.com"]').click();

  // Fill [placeholder="jamie\@example\.com"]
  await page.locator('[placeholder="jamie\\@example\\.com"]').fill('Jorge.cardonaor@gmail.com');

  // Click [placeholder="•••••••••••••••"]
  await page.locator('[placeholder="•••••••••••••••"]').click();

  // Fill [placeholder="•••••••••••••••"]
  await page.locator('[placeholder="•••••••••••••••"]').fill('0123456789');

  // Click button:has-text("Sign in →")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
    page.locator('button:has-text("Sign in →")').click()
  ]);

  // Click #ember30
  await page.locator('#ember30').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/members');

  // Click h3:has-text("pedro")
  await page.locator('h3:has-text("pedro")').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/6276a0bf07fc340de61c0dfb');

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('');

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('pedro2000@gmail.com');
  // Click button:has-text("Save")

  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/members/627685e707fc340de61c0da6' }*/),
    page.locator('button:has-text("Save")').click()
  ]);

});