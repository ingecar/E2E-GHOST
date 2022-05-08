import { test, expect } from "@playwright/test";

const credentials = {
    page: 'http://localhost:2368/ghost/#/signin',
    siteTitle: 'TestSiteElsa',
    fullName: 'Elsa Pato',
    email: 'correo@correo.com',
    pass: 'ElsaTest15+'
  };
const nombrePostPrueba = 'NuevoPost'

test.beforeEach(async ({ page }) => {
    await page.goto(credentials.page);
});

test.describe('Crear, editar, despublicar, eliminar posts', () => {
    test('Entrar al login', async ({ page }) => {
        // Ingresar Email
        await page.locator('input[name=identification]').fill(credentials.email);
        // Ingresar Password
        await page.locator('input[name=password]').fill(credentials.pass);
        // Clic en Sign in
        await Promise.all([
            page.waitForNavigation( /*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
            page.locator('button[type=submit]').click(),
            await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard'),
            await page.screenshot({ path: 'screenshots/Entrar al login.png', fullPage: true }),
        ]);




        // Click Posts
        await page.locator('li', { hasText: 'Posts' }).click();
        
        // Click text=New post
        await page.locator('text=New post').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        // Fill textarea
        await page.locator('textarea').fill(nombrePostPrueba);
        // Esperar navegación
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
            // Click Posts
            await page.locator('a span', { hasText: 'Posts'}).click(),
            page.waitForNavigation(),
            await page.locator('a[title=Published]').click(),
            page.waitForNavigation(),
            await page.screenshot({ path: 'screenshots/Nuevo post publicado.png', fullPage: true }),
            
        ]);



        // Editar POST
        await page.locator('h2', { hasText: 'Posts' }).click();
        page.waitForNavigation(),
        await page.pause()
        await page.locator('h3:has-text("nuevoPost")').click();
        await page.locator('div p').fill('----Se añade descripcion del post----');

        // Click textarea
        // Fill textarea
        // Click div[role="button"]:has-text("Update")
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click button:has-text("Update")
        await page.locator('button:has-text("Update")').click();
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(),
            // Click Posts
            await page.locator('a span', { hasText: 'Posts'}).click(),
            page.waitForNavigation(),
            await page.locator('a[title=Published]').click(),
            await page.screenshot({ path: 'screenshots/Nuevo post publicado.png', fullPage: true }),
            await page.pause()
        ]);
    })

    // test('Crear nuevo post', async({ page }) => {
    //     // Click Posts
    //     await Promise.all([
    //     page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
    //     page.locator('#ember26').click()
    //     ]);
    //     // Click text=New post
    //     await page.locator('text=New post').click();
    //     await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
    //     // Fill textarea
    //     await page.locator('textarea').fill(nombrePostPrueba);
    //     // Esperar navegación
    //     await Promise.all([
    //     page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/post/6276ad360569ae06343c1dfc' }*/),
    //     page.locator('.koenig-editor__editor').click()
    //     ]);
    //     // Click Publish
    //     await page.locator('div[role="button"]:has-text("Publish")').click();
    //     // Click Publish
    //     await page.locator('button:has-text("Publish")').click();
    //     // Click Publish
    //     await page.locator('button:has-text("Publish")').click();
    // })
})