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

  // Click a:has-text(".page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:")
  await page.locator('a:has-text(".page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:")').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');

  // Click text=New page
  await page.locator('text=New page').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/page');

  // Click textarea
  await page.locator('textarea').click();

  // Press CapsLock
  await page.locator('textarea').press('CapsLock');

  // Fill textarea
  await page.locator('textarea').fill('Nueva');

  // Click .koenig-editor__editor
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/page/6277f4076609b10a183d8acc' }*/),
    page.locator('.koenig-editor__editor').click()
  ]);

  // Press CapsLock
  await page.locator('.koenig-editor__editor').press('CapsLock');

  // Press CapsLock
  await page.locator('.koenig-editor__editor').press('CapsLock');

  // Press CapsLock
  await page.locator('#ember109 div:has-text("Nueva")').nth(1).press('CapsLock');

  // Click div[role="button"]:has-text("Publish")
  await page.locator('div[role="button"]:has-text("Publish")').click();

  // Click #ember-basic-dropdown-content-ember115 div:has-text("Schedule it for later (-05) Set automatic future publish date") >> nth=2
  await page.locator('#ember-basic-dropdown-content-ember115 div:has-text("Schedule it for later (-05) Set automatic future publish date")').nth(2).click();

  // Click input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).click();

  // Click button:has-text("Schedule")
  await page.locator('button:has-text("Schedule")').click();

  // Click text=Pages >> svg
  await page.locator('text=Pages >> svg').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');

  await page.screenshot({ path: './screenshots/progamar_publicacion.png', fullPage: true });

});