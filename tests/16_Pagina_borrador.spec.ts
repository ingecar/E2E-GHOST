import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const nombrePaginaPrueba = 'NuevaPaginaPruebas'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test('Pagina como borrador', async ({ page }) => {
    await page.locator('li', { hasText: 'Pages' }).click();
    await page.locator('header section a', {hasText: 'New page'}).click();
    await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/page');
    await page.locator('textarea').fill(nombrePaginaPrueba);
    await page.locator('textarea').press('Tab');
    await Promise.all([
        page.waitForNavigation(),
        page.locator('.koenig-editor__editor').click()
    ]);
    // Captura de pantalla
    await Promise.all([
        page.waitForNavigation(),
        await page.locator('a span', { hasText: 'Pages'}).click(),
        await page.locator('li', { hasText: 'Pages' }).click(),
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'Pagina como borrador.png', fullPage: true }),            
    ])
    await page.locator('li', { hasText: 'Pages' }).click();
    await page.locator('h3', { hasText: nombrePaginaPrueba }).click();
    await page.locator('button[title=Settings]').click();
    await page.locator('div form button', {hasText: 'Delete page'}).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('h1').press('Enter');

})

    
