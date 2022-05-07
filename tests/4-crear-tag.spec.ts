import { test, expect } from '@playwright/test';

test('Crear Tag', async ({ page }) => {
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
  // Click text=Tags
  await page.locator('text=Tags').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags');
  // Click text=New tag
  await page.locator('text=New tag').click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags/new');
  // Click input[name="name"]
  await page.locator('input[name="name"]').click();
  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('NombreNuevaTag');
  // Click input[name="slug"]
  await page.locator('input[name="slug"]').click();
  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/tags/nombrenuevatag' }*/),
    page.locator('button:has-text("Save")').click()
  ]);
  // Click textarea[name="description"]
  await page.locator('textarea[name="description"]').click();
  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('AgregarNuevaDescripci');

  // Click button:has-text("Delete tag")
  await page.locator('button:has-text("Delete tag")').click();

})