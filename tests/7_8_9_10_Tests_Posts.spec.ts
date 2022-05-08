import { test, expect } from '@playwright/test';
const credentials = {
    page: 'http://localhost:2368/ghost/#/signin',
    siteTitle: 'TestSiteElsa',
    fullName: 'Elsa Pato',
    email: 'correo@correo.com',
    pass: 'ElsaTest15+'
  };
const nombrePostPrueba = 'NuevoPostPruebas'

test.beforeEach(async ({ page }) => {
    await page.goto(credentials.page);
    await page.type('input[name=identification]', credentials.email)
    await page.type('input[name=password]', credentials.pass)
    await page.click('button[type=submit]')
});

test.describe('Crear, editar, despublicar, eliminar posts', () => {
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
        await page.locator('button:has-text("Publish")').click(),
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await page.screenshot({ path: 'screenshots/Nuevo post publicado.png', fullPage: true }),            
        ])
    })
    test('Editar un Post',async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.locator('textarea').fill(nombrePostPrueba + 'Editado');
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('footer button span', {hasText: 'Update'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await page.screenshot({ path: 'screenshots/Post editado.png', fullPage: true })
        ])
    })
    test('Despublicar un post',async ({page}) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.click('div[class="gh-publishmenu-radio "]')
        await page.locator('footer button span', {hasText: 'Unpublish'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Drafts]'),
            await page.screenshot({ path: 'screenshots/Post despublicado.png', fullPage: true })
        ])
    })
    test('Eliminar un Post despublicado',async ({ page }) => {
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Drafts]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.locator('text= Delete post').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Drafts]'),
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: 'screenshots/Post eliminado.png', fullPage: true })
        ])
    })
})