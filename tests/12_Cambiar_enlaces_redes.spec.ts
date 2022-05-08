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

  // Click #ember34 circle
  await page.locator('#ember34 circle').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');

  // Click text=General
  await page.locator('text=General').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/general');

  // Click text=Meta data Extra content for search engines Expand Twitter card Customize structu >> button >> nth=3
  await page.locator('text=Meta data Extra content for search engines Expand Twitter card Customize structu >> button').nth(3).click();

  // Click [placeholder="https\:\/\/www\.facebook\.com\/ghost"]
  await page.locator('[placeholder="https\\:\\/\\/www\\.facebook\\.com\\/ghost"]').click();

  // Fill [placeholder="https\:\/\/www\.facebook\.com\/ghost"]
  await page.locator('[placeholder="https\\:\\/\\/www\\.facebook\\.com\\/ghost"]').fill('https://www.facebook.com/ghost_jorge');

  // Click [placeholder="https\:\/\/twitter\.com\/ghost"]
  await page.locator('[placeholder="https\\:\\/\\/twitter\\.com\\/ghost"]').click();

  // Fill [placeholder="https\:\/\/twitter\.com\/ghost"]
  await page.locator('[placeholder="https\\:\\/\\/twitter\\.com\\/ghost"]').fill('https://twitter.com/ghost_jorge');

  // Click button:has-text("Save")
  await page.locator('button:has-text("Save")').click();

  await page.screenshot({ path: './screenshots/cambiar_enlaces.png', fullPage: true });

});