import { test, expect } from '@playwright/test';

test('Eliminar post', async ({ page }) => {

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
  
  // Click text=Otro Post editado
  await page.locator('text=Otro Post editado').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post/6276ae420569ae06343c1e0e');
  // Click .settings-menu-toggle
  await page.locator('.settings-menu-toggle').click();
  // Click button:has-text("Delete post")
  await page.locator('button:has-text("Delete post")').click();
  // Click #ember142
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
    page.locator('#ember142').click()
  ]);

});