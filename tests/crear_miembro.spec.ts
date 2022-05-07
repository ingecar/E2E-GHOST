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

  // Click text=New member
  await page.locator('text=New member').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/new');

  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('pedro');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('pedro2022');

  // Click text=Name Email
  await page.locator('text=Name Email').click();

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('pedro2027@gmail.com');

  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/members/62749713abc7150440eaa7e3' }*/),
    page.locator('button:has-text("Save")').click()
  ]);

  await page.screenshot({ path: 'crear_miembro.png', fullPage: true });

  // Click text=ingecar Dashboard .view-site_svg__a{fill:none;stroke:currentColor;stroke-linecap >> div[role="button"]
  await page.locator('text=ingecar Dashboard .view-site_svg__a{fill:none;stroke:currentColor;stroke-linecap >> div[role="button"]').click();

  // Click text=Sign out
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/signin' }*/),
    page.locator('text=Sign out').click()
  ]);

});