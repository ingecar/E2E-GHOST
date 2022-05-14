import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const nombrePostPrueba = 'NuevoPostPruebas'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost342);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('Crear, editar, despublicar, eliminar posts', () => {
    test('Crear un Post', async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.locator('section a span', {hasText: 'New post'}).click();
        await new Promise(r => setTimeout(r, 1000));
        // await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        await page.type('textarea[placeholder="Post Title"]', nombrePostPrueba);
        await page.locator('textarea[placeholder="Post Title"]').press('Tab');
        // Click Publish
        await page.locator('div[role="button"]:has-text("Publish")').click();
        // Click Publish
        await page.locator('button:has-text("Publish")').click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('header div div a', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await page.screenshot({ path: environment.pathScreenshots_v342 + 'Nuevo post publicado.png', fullPage: true }),            
        ])
    })
    test('Editar un Post',async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.type('textarea[placeholder="Post Title"]', 'Editado');
        await page.locator('textarea[placeholder="Post Title"]').press('Tab');
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('footer button span', {hasText: 'Update'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('header div div a', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await page.screenshot({ path: environment.pathScreenshots_v342 + 'Post editado.png', fullPage: true })
        ])
    })
    test('Eliminar un Post despublicado',async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.locator('text= Delete post').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
        await new Promise(r => setTimeout(r, 2000)),
        await page.screenshot({ path: environment.pathScreenshots_v342 + 'Post eliminado.png', fullPage: true })
    })
})