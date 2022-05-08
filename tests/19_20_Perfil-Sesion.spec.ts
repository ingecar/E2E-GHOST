import { test, expect } from '@playwright/test';
const credentials = {
    page: 'http://localhost:2368/ghost/#/signin',
    siteTitle: 'TestSiteElsa',
    fullName: 'Elsa Pato',
    email: 'correo@correo.com',
    pass: 'ElsaTest15+'
  };

test.beforeEach(async ({ page }) => {
    await page.goto(credentials.page);
    await page.type('input[name=identification]', credentials.email)
    await page.type('input[name=password]', credentials.pass)
    await page.click('button[type=submit]')
});

test.describe('CrearTag, CrearPost, AsociarTagPost, DesasociarTagPost', () => {
    test('Cambiar nombre', async ({ page }) => {
        await page.locator('.gh-user-avatar.relative').click();
        await page.locator('li a', {hasText: 'Your profile'}).click();
        await page.locator('header section button', {hasText: 'Save'}).click(),
        await page.locator('#user-name').click()
        await page.type('#user-name', ' Actualizado')
        await page.locator('section button span', {hasText: 'Save'}).click()
        await page.locator('.gh-user-avatar.relative').click();
        await Promise.all([
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: 'screenshots/Nombre de perfil cambiado.png', fullPage: true })
        ])
    })
    test('Cerrar sesion',async ({ page }) => {
        await page.locator('.gh-user-avatar.relative').click();
        await page.locator('li a', {hasText: 'Sign out'}).click();
        await Promise.all([
            await new Promise(r => setTimeout(r, 2000)),
            await page.screenshot({ path: 'screenshots/Sesion cerrada.png', fullPage: true })
        ])
    })
})