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
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/627739636609b10a183d8a6c');

  // Click button[role="button"]:has-text(".settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linej")
  await page.locator('button[role="button"]:has-text(".settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linej")').click();

  // Click button:has-text("Delete member")
  await page.locator('button:has-text("Delete member")').click();


  await page.screenshot({ path: './screenshots/eliminar_miembro.png', fullPage: true });

});