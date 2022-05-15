import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const nombrePostPrueba = 'NuevoPostPruebas'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('ul li span a', {hasText: 'View site'}).click()
});

test.describe('Crear, editar, despublicar, eliminar posts', () => {
    test('Crear un Post', async ({ page }) => {
        let nombrePrueba = 'CrearPost-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        await new Promise(r => setTimeout(r, 5000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.locator('text=New post').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        await page.locator('textarea').fill(nombrePostPrueba);
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });

        await Promise.all([
            page.waitForNavigation(),
            page.locator('.koenig-editor__editor').click()
        ]);
        // Click Publish
        await page.locator('div[role="button"]:has-text("Publish")').click();
        // Click Publish
        await page.screenshot({ path: nombreScreen+'3.png', fullPage: true });

        await page.locator('button:has-text("Publish")').click();
        // Click Publish
        await page.screenshot({ path: nombreScreen+'4.png', fullPage: true });

        await page.locator('button:has-text("Publish")').click(),
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await new Promise(r => setTimeout(r, 3000)),
            await page.screenshot({ path: nombreScreen+'5.png', fullPage: true })

        ])
    })
    test('Editar un Post',async ({ page }) => {
        let nombrePrueba = 'EditarPost-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        
        await new Promise(r => setTimeout(r, 5000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.locator('textarea').fill(nombrePostPrueba + 'Editado');
        await page.screenshot({ path: nombreScreen+'3.png', fullPage: true });
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({ path: nombreScreen+'4.png', fullPage: true });
        await page.locator('footer button span', {hasText: 'Update'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Published]'),
            await page.screenshot({ path: nombreScreen+'5.png', fullPage: true })
        ])
    })
    test('Despublicar un post',async ({page}) => {
        let nombrePrueba = 'DespublicarPost-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        await page.click('a[title=Published]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.click('div[class="gh-publishmenu-radio "]')
        await page.screenshot({ path: nombreScreen+'3.png', fullPage: true });
        await page.locator('footer button span', {hasText: 'Unpublish'}).click();
        await new Promise(r => setTimeout(r, 3000));
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Drafts]'),
            await page.screenshot({ path: nombreScreen+'4.png', fullPage: true })
        ])
    })
    test('Eliminar un Post despublicado',async ({ page }) => {
        let nombrePrueba = 'EliminarPost-'
        let nombreScreen = environment.pathScreenshots_v446 + nombrePrueba;
        
        await new Promise(r => setTimeout(r, 5000));
        await page.screenshot({ path: nombreScreen+'1.png', fullPage: true });
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Drafts]')
        // await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({ path: nombreScreen+'2.png', fullPage: true });
        await page.locator('li a h3', {hasText: nombrePostPrueba.toString()}).click()
        await page.click('button[title="Settings"]')
        await page.screenshot({ path: nombreScreen+'3.png', fullPage: true });
        await page.locator('text= Delete post').click()
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({ path: nombreScreen+'4.png', fullPage: true });
        await page.locator('h1').press('Enter');
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('a span', { hasText: 'Posts'}).click(),
            await page.click('a[title=Drafts]'),
            await new Promise(r => setTimeout(r, 1000)),
            await page.screenshot({ path: nombreScreen+'5.png', fullPage: true })
        ])
    })
})