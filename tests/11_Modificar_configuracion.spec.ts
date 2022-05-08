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

  // Click text=Publication info Title & description The details used to identify your publicati >> button >> nth=0
  await page.locator('text=Publication info Title & description The details used to identify your publicati >> button').first().click();

  // Click #ember118
  await page.locator('#ember118').click();

  // Fill #ember118
  await page.locator('#ember118').fill('ingecar_site');

  // Click .gh-expandable-content >> nth=0
  await page.locator('.gh-expandable-content').first().click();

  // Press ArrowDown with modifiers
  await page.locator('#ember120').press('Shift+ArrowDown');

  // Press ArrowUp with modifiers
  await page.locator('#ember120').press('Shift+ArrowUp');

  // Press ArrowDown with modifiers
  await page.locator('#ember120').press('Shift+ArrowDown');

  // Press CapsLock
  await page.locator('#ember120').press('CapsLock');

  // Fill #ember120
  await page.locator('#ember120').fill('Sitio principal de jorge cardona');

  // Click text=Publication info Title & description The details used to identify your publicati >> button >> nth=1
  await page.locator('text=Publication info Title & description The details used to identify your publicati >> button').nth(1).click();

  // Select Asia/Dubai
  await page.locator('select[name="general\\[timezone\\]"]').selectOption('Asia/Dubai');

  // Click text=Publication Language Set the language/locale which is used on your site Expand >> button
  await page.locator('text=Publication Language Set the language/locale which is used on your site Expand >> button').click();

  // Click text=Publication Language Set the language/locale which is used on your site Close De >> input[type="text"]
  await page.locator('text=Publication Language Set the language/locale which is used on your site Close De >> input[type="text"]').click();

  // Fill text=Publication Language Set the language/locale which is used on your site Close De >> input[type="text"]
  await page.locator('text=Publication Language Set the language/locale which is used on your site Close De >> input[type="text"]').fill('es');

  // Click button:has-text("Save")
  await page.locator('button:has-text("Save")').click();

  await page.screenshot({ path: './screenshots/modificar_configuracion.png', fullPage: true });

});