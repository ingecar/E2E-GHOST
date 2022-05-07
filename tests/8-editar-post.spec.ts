import { test, expect } from '@playwright/test';

test('Editar post', async ({ page }) => {

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
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post/6276ae420569ae06343c1e0e');
  // Click textarea
  await page.locator('textarea').click();
  // Fill textarea
  await page.locator('textarea').fill('Otro Post editado');
  // Click div[role="button"]:has-text("Update")
  await page.locator('div[role="button"]:has-text("Update")').click();
  // Click button:has-text("Update")
  await page.locator('button:has-text("Update")').click();
  // Click span:has-text("Posts")
  await page.locator('span:has-text("Posts")').click();

});