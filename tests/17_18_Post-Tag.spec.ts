import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const nombreTagPrueba = 'NuevaTagPruebas'
const nombrePostPrueba = 'NuevoPostPruebas'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('CrearTag, CrearPost, AsociarTagPost, DesasociarTagPost', () => {
    test('Crear Tag', async ({ page }) => {
        await page.locator('li', { hasText: 'Tags' }).click();
        await page.locator('header section a', {hasText: 'New tag'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags/new');
        await page.type('input[name=name]', nombreTagPrueba)
        await page.locator('input[name=name]').press('Tab');
        await Promise.all([
            page.waitForNavigation(),
            page.locator('header section button', {hasText: 'Save'}).click()
        ]);
    })
    test('Crear un Post', async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.locator('text=New post').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        await page.locator('textarea').fill(nombrePostPrueba);
        await Promise.all([
            page.waitForNavigation(),
            page.locator('.koenig-editor__editor').click()
        ]);
        // Click Publish
        await page.locator('div[role="button"]:has-text("Publish")').click();
        // Click Publish
        await page.locator('button:has-text("Publish")').click();
        // Click Publish
        await page.locator('button:has-text("Publish")').click()
    })
    test('Asociar Tag a un Post',async ({ page }) => {
        await page.locator('ul li a', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.locator('#tag-input').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('li', {hasText: nombreTagPrueba}).click();
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('footer button span', {hasText: 'Update'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.locator('ul li a', { hasText: 'Posts'}).click(),
            await page.locator('div[role=button]', { hasText: 'All tags'}).click(),
            await page.locator('li[role=option]', { hasText: nombreTagPrueba}).click(),
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: environment.pathScreenshots_v446 + 'Post con tag asociada.png', fullPage: true })
        ])
    })
    test('Desasociar Tag de un Post',async ({ page }) => {
        await page.locator('ul li a', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.locator('#tag-input').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('#tag-input').press('Backspace');
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('footer button span', {hasText: 'Update'}).click();
        await new Promise(r => setTimeout(r, 3000));
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.locator('ul li a', { hasText: 'Posts'}).click(),
            await page.locator('div[role=button]', { hasText: 'All tags'}).click(),
            await page.locator('li[role=option]', { hasText: nombreTagPrueba}).click(),
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: environment.pathScreenshots_v446 + 'Post sin tag asociada.png', fullPage: true })
        ])

        await page.click('a[title=Published]')
        await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.locator('text= Delete post').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
        await new Promise(r => setTimeout(r, 3000));

        await page.locator('a span', { hasText: 'Posts'}).click(),
        await page.locator('li a', { hasText: 'Tags' }).click();
        await page.locator('h3', {hasText: nombreTagPrueba}).click()
        await page.locator('button[type=button]', {hasText: 'Delete tag'}).click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
    })
    
})