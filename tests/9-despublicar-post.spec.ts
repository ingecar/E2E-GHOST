import { test, expect } from '@playwright/test';

test('Despublicar post', async ({ page }) => {

  // Go to http://localhost:2368/ghost/#/signin
  await page.goto('http://localhost:2368/ghost/#/signin');

  // Click [placeholder="jamie\@example\.com"]
  await page.locator('[placeholder="jamie\\@example\\.com"]').click();

  // Fill [placeholder="jamie\@example\.com"]
  await page.locator('[placeholder="jamie\\@example\\.com"]').fill('correo@correo.com');

  // Fill [placeholder="•••••••••••••••"]
  await page.locator('[placeholder="•••••••••••••••"]').fill('ElsaTest15+');

  // Click button:has-text("Sign in →")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
    page.locator('button:has-text("Sign in →")').click()
  ]);
  // Click #ember26
  await page.locator('#ember26').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/posts');
  // Click text=Otro Post
  await page.locator('text=Otro Post').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post/6276a488e903af0a7cc277ed');
  
  // Click div[role="button"]:has-text("Update")
  await page.locator('div[role="button"]:has-text("Update")').click();
  // Click .gh-publishmenu-radio-button >> nth=0
  await page.locator('.gh-publishmenu-radio-button').first().click();
  // Click button:has-text("Unpublish")
  await page.locator('button:has-text("Unpublish")').click();
  // Click span:has-text("Posts")
  await page.locator('span:has-text("Posts")').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/posts');

});