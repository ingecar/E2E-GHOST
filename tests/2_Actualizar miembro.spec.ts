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

  // Click text=Ana lucia
  await page.locator('text=Ana lucia').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/62771e5a07fc340de61c0f3a');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('Anita21@hil.com');


  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('Anita2022@hotmail.com');

  // Click textarea[name="note"]
  await page.locator('textarea[name="note"]').click();

  // Press CapsLock
  await page.locator('textarea[name="note"]').press('CapsLock');

  // Fill textarea[name="note"]
  await page.locator('textarea[name="note"]').fill('Nueva nota descriptiva');

  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/members/62771e5a07fc340de61c0f3a' }*/),
    page.locator('button:has-text("Save")').click()
  ]);

  await page.screenshot({ path: './screenshots/actualizar_miembro.png', fullPage: true });

});