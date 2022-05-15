import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const TagName = 'Test Tag';
const TagDescription = 'Description Tag Example'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost342);
    await page.screenshot({ path: environment.pathScreenshots_v342 + 'Login.png' , fullPage: true }),            
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('Crear, editar, eliminar tag', () => {

    test('Crear un Tag', async ({ page }) => {
        await page.locator('li', { hasText: 'Tags' }).click();
        page.locator('a:has-text("New tag")').click();
        await page.screenshot({ path: environment.pathScreenshots_v342 + 'CrearTag-1.png' , fullPage: true }),                    
        await page.type('input[name=name]', TagName.toString())
        await page.type('textarea[name=description]', TagDescription.toString())
        // Click on save
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        // Cscreenshot capture
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),
            await page.screenshot({ path: environment.pathScreenshots_v342 + 'CrearTag-2.png' , fullPage: true }),      
        ])
    })
    test('Editar un Tag',async ({ page }) => {
        await page.locator('li', { hasText: 'Tags' }).click();
        await page.locator('div h3', {hasText: TagName.toString()}).click()
        await page.locator('textarea').fill(TagName + ' Editado');

        // Click Update
        page.locator('button:has-text("Save")').click()
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('h2 a', { hasText: 'Tags'}).click(),
            await page.locator('div h3', {hasText: TagName.toString()}).click(),
            await page.screenshot({ path: environment.pathScreenshots_v342 + 'EditarTag-1.png' , fullPage: true }),  
        ])
    })

    test('Eliminar un Tag',async ({ page }) => {
        await page.locator('li', { hasText: 'Tags' }).click();
        await page.locator('div h3', {hasText: TagName.toString()}).click()

        await page.locator('button span', { hasText: 'Delete tag' }).click();
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
        await new Promise(r => setTimeout(r, 2000));
        
        await Promise.all([
            await page.screenshot({ path: environment.pathScreenshots_v342 + 'DeleteTag-1.png' , fullPage: true }),            
        ])
    })
})