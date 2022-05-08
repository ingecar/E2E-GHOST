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

  // Fill textarea
  await page.locator('textarea').fill('nueva');

  // Click .koenig-editor__editor
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/page/6277f1546609b10a183d8a99' }*/),
    page.locator('.koenig-editor__editor').click()
  ]);

  // Click div[role="button"]:has-text("Publish")
  await page.locator('div[role="button"]:has-text("Publish")').click();

  // Click button:has-text("Publish")
  await page.locator('button:has-text("Publish")').click();

  // Click button:has-text("Published")
  await page.locator('button:has-text("Published")').click();

  // Click text=Pages
  await page.locator('text=Pages').click();
  //await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');

  await page.screenshot({ path: './screenshots/crear_pagina.png', fullPage: true });


});