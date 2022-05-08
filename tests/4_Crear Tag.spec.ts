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

  // Click #ember76 >> text=New tag
  await page.locator('#ember76 >> text=New tag').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags/new');

  // Click input[name="name"]
  await page.locator('input[name="name"]').click();

  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('Tecnologia');

  // Click input[type="color"]
  await page.locator('input[type="color"]').click();

  // Fill input[type="color"]
  await page.locator('input[type="color"]').fill('#3f3e93');

  // Click textarea[name="description"]
  await page.locator('textarea[name="description"]').click();

  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/tags/tecnologia' }*/),
    page.locator('button:has-text("Save")').click()
  ]);

  // Click #ember29
  await page.locator('#ember29').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags');

  await page.screenshot({ path: './screenshots/crear_tag.png', fullPage: true });

});