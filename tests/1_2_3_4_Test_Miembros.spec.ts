import { test, expect } from '@playwright/test';
const credentials = {
    page: 'http://localhost:2368/ghost/#/signin',
    siteTitle: 'TestSiteElsa',
    fullName: 'Elsa Pato',
    email: 'jorge.cardonaor@gmail.com',
    pass: '0123456789'
  };
const MemberName = 'MemberTest';
const MemberEmail = 'MemberTest@gmail.com';
const MemberTags: Array<string>  = ['autos', 'motos'];

test.beforeEach(async ({ page }) => {
    await page.goto(credentials.page);
    await page.type('input[name=identification]', credentials.email)
    await page.type('input[name=password]', credentials.pass)
    await page.click('button[type=submit]')
});

test.describe('Crear, editar, eliminar miembro', () => {

    test('Crear un Miembro', async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('text=New member').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/new');
        await page.type('input[name=name]', MemberName.toString())
        await page.type('input[name=email]', MemberEmail.toString())
        // for(let a = 0; a < MemberTags.length; a++){
        //     await page.locator('input[type="search"]').fill(MemberTags[a]);
        //     await page.locator('input[type="search"]').press('Enter');
        // }
        // Click on save
        await Promise.all([
            page.waitForNavigation(),
            page.locator('button:has-text("Save")').click()
        ])
        // Cscreenshot capture
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('h2 a', { hasText: 'Members'}).click(),
            await page.screenshot({ path: 'screenshots/ejemplo_member.png', fullPage: true }),            
        ])
    })
    test('Editar un Miembro',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        await page.locator('textarea').fill(MemberName + ' Editado');

        // Click Update
        // await new Promise(r => setTimeout(r, 1000));
        page.locator('button:has-text("Save")').click()
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            await page.locator('h2 a', { hasText: 'Members'}).click(),
            await page.locator('div h3', {hasText: MemberName.toString()}).click(),
            await page.screenshot({ path: 'screenshots/ejemplo_edited_member.png', fullPage: true }),            
        ])
    })

    test('Eliminar un Member',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        // await new Promise(r => setTimeout(r, 2000));

        await page.locator('button[role="button"]:has-text(".settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linej")').click();
        await page.locator('button:has-text("Delete member")').click();
        await page.locator('button span', { hasText: 'Delete Members' }).click();
        await new Promise(r => setTimeout(r, 3000));
    
        await Promise.all([
            await page.screenshot({ path: 'screenshots/ejemplo_edited_member.png', fullPage: true }),            
        ])
    })
})