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

  // Click input[name="name"]
  await page.locator('input[name="name"]').click();

  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('Ana lucia');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('Anita21@hotmail.com');

  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/members/62771ce507fc340de61c0f2a' }*/),
    page.locator('button:has-text("Save")').click()
  ]);

  // Click text=ingecar Dashboard .view-site_svg__a{fill:none;stroke:currentColor;stroke-linecap >> div[role="button"]
  await page.locator('text=ingecar Dashboard .view-site_svg__a{fill:none;stroke:currentColor;stroke-linecap >> div[role="button"]').click();

  // Click text=Sign out
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/signin' }*/),
    page.locator('text=Sign out').click()
  ]);

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
  //await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/62771ce507fc340de61c0f2a');

  await page.screenshot({ path: './screenshots/crear_miebro.png', fullPage: true });


});