import { test, expect } from '@playwright/test';
import { environment } from '../environment';

const MemberName = 'Test Member';
const MemberEmail = 'Test@member.com'
// const MemberTags: Array<string>  = ['autos', 'motos'];

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost446);
    await page.screenshot({ path: environment.pathScreenshots_v446 + 'Login.png' , fullPage: true }),            
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
});

test.describe('Crear, editar, eliminar miembro', () => {

    test('Crear un Miembro', async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('text=New member').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/new');
        await page.screenshot({ path: environment.pathScreenshots_v446 + 'CrearMiembro-1.png' , fullPage: true }),            
        await page.type('input[name=name]', MemberName.toString())
        await page.type('input[name=email]', MemberEmail.toString())
        // for(let a = 0; a < MemberTags.length; a++){
        //     await page.locator('input[type="search"]').fill(MemberTags[a]);
        //     await page.locator('input[type="search"]').press('Enter');
        // }
        // Click on save
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        // Cscreenshot capture
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
            await page.screenshot({ path: environment.pathScreenshots_v446 + 'CrearMiembro-2.png' , fullPage: true }),            
        ])
    })
    test('Editar un Miembro',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        await page.locator('textarea').fill(MemberName + ' Editado');

        // Click Update
        page.locator('button:has-text("Save")').click()
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('h2 a', { hasText: 'Members'}).click(),
            await page.locator('div h3', {hasText: MemberName.toString()}).click(),
            await page.screenshot({ path: environment.pathScreenshots_v446 + 'EditarMiembro-1.png' , fullPage: true }),            
        ])
    })

    test('Eliminar un Member',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()

        await page.locator('button[role="button"]:has-text(".settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linej")').click();
        await page.locator('button span', { hasText: 'Delete member' }).click();
        await new Promise(r => setTimeout(r, 3500));
        await page.locator('h1').press('Enter');
        
        await Promise.all([
            await page.screenshot({ path: environment.pathScreenshots_v446 + 'EliminarMiembro-1.png' , fullPage: true }),            
        ])
    })
})