import { test, expect } from '@playwright/test';
import { environment } from '../environment';

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('Cambiar nombre de usuario y cerrar sesion', () => {
    test('Cambiar nombre', async ({ page }) => {
        let nombrePrueba = 'CambiarNombreUsuario-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        await page.locator('.gh-user-avatar.relative').click();
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });
        await page.locator('li a', {hasText: 'Your profile'}).click();
        await page.screenshot({ path: nombreScreen+'3.png', fullPage: true });
        // await page.locator('header section button', {hasText: 'Save'}).click(),
        // await page.locator('#user-name').click()
        await page.type('#user-name', ' Actualizado')
        await page.screenshot({ path: nombreScreen+'4.png', fullPage: true });
        await page.locator('section button span', {hasText: 'Save'}).click()
        await page.locator('.gh-user-avatar.relative').click();
        await Promise.all([
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: nombreScreen+'5.png', fullPage: true })
        ])
    })
    test('Cerrar sesion',async ({ page }) => {
        let nombrePrueba = 'CerrarSesion-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        await page.locator('.gh-user-avatar.relative').click();
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });
        await page.locator('li a', {hasText: 'Sign out'}).click();
        await Promise.all([
            await new Promise(r => setTimeout(r, 2000)),
            await page.screenshot({ path: nombreScreen+'3.png', fullPage: true })
        ])
    })
})