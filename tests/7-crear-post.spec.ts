import { test, expect } from '@playwright/test';

test('Crear post', async ({ page }) => {

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
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
    page.locator('#ember26').click()
  ]);
  // Click text=New post
  await page.locator('text=New post').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
  // Fill textarea
  await page.locator('textarea').fill('Otro Post');
  // Click .koenig-editor__editor
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/post/6276ad360569ae06343c1dfc' }*/),
    page.locator('.koenig-editor__editor').click()
  ]);
  // Click div[role="button"]:has-text("Publish")
  await page.locator('div[role="button"]:has-text("Publish")').click();
  // Click button:has-text("Publish")
  await page.locator('button:has-text("Publish")').click();
  // Click button:has-text("Publish")
  await page.locator('button:has-text("Publish")').click();
  // Click span:has-text("Posts")
  // await page.locator('span:has-text("Posts")').click();
  // await expect(page).toHaveURL('http://localhost:2368/ghost/#/posts');

});