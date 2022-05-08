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

  // Click text=Tags
  await page.locator('text=Tags').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags');

  // Click text=Tecnologia
  await page.locator('text=Tecnologia').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags/tecnologia');

  // Click button:has-text("Delete tag")
  await page.locator('button:has-text("Delete tag")').click();

  await page.screenshot({ path: './screenshots/eliminar_tag.png', fullPage: true });
});