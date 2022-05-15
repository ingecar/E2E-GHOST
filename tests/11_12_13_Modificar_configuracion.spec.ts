import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const TagName = 'Test Tag';
const TagDescription = 'Description Tag Example'

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.screenshot({ path: environment.pathScreenshots_v446 + 'Login.png' , fullPage: true }),            
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('Editar Configuraciones', () => {

    test('Editar Titulo', async ({ page }) => {
        // Click text=Publication info Title & description The details used to identify your publicati >> button >> nth=0
        await page.locator('text=Publication info Title & description The details used to identify your publicati >> button').first().click();
        // Click .gh-expandable-content >> nth=0
        await page.locator('.gh-expandable-content').first().click();
        // Click #ember104
        await page.locator('#ember104').click();
        // Fill #ember104
        await page.locator('#ember104').fill('ingecar_site_updated');
        // Click button:has-text("Save")
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-1.png' , fullPage: true });
        await page.locator('button):has-text("Save")').click();
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-2.png' , fullPage: true });
    })
    
    test('Editar Redes', async ({ page }) => {
        // Click [placeholder="https\:\/\/www\.facebook\.com\/ghost"]
        await page.locator('[placeholder="https\\:\\/\\/www\\.facebook\\.com\\/ghost"]').click();
        // Fill [placeholder="https\:\/\/www\.facebook\.com\/ghost"]
        await page.locator('[placeholder="https\\:\\/\\/www\\.facebook\\.com\\/ghost"]').fill('https://www.facebook.com/ingecarPage');
        // Fill [placeholder="https\:\/\/twitter\.com\/ghost"]
        await page.locator('[placeholder="https\\:\\/\\/twitter\\.com\\/ghost"]').fill('https://twitter.com/ingecarPage');
        // Click button:has-text("Save")
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-3.png' , fullPage: true });
        await page.locator('button:has-text("Save")').click();
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-4.png' , fullPage: true });
        
    })

    test('Sitio Privado', async ({ page }) => {
        // Click label span
        await page.locator('label span').click();
        // Click text=Advanced settings Make this site private Enable protection with a simple shared  >> span
        await page.locator('text=Advanced settings Make this site private Enable protection with a simple shared  >> span').click();
        // Click button:has-text("Save")
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-5.png' , fullPage: true });
        await page.locator('button:has-text("Save")').click();
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditSettings-6.png' , fullPage: true });
      })
})