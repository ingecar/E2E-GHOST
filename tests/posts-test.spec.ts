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
    test('Entrar al login', async({ page }) =>{
        // Ingresar Email
        await page.locator('#ember7').fill(credentials.email);
        // Ingresar Password
        await page.locator('#ember9').fill(credentials.pass);
        // Clic en Sign in
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
        page.locator('#ember11').click(),
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard'),
        await page.screenshot({ path: 'screenshots/Entrar al login.png', fullPage: true }),
        ]);




        // Click Posts
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
        page.locator('#ember26').click()
        ]);
        // Click text=New post
        await page.locator('text=New post').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        // Fill textarea
        await page.locator('textarea').fill(nombrePostPrueba);
        // Esperar navegación
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/post/6276ad360569ae06343c1dfc' }*/),
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
            page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
            await page.goto('http://localhost:2368/ghost/#/dashboard'),
            await page.screenshot({ path: 'screenshots/Nuevo post publicando.png', fullPage: true })
        ]);




        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
            page.locator('#ember26').click()
            ]);
        // Click text=Otro Post
        await page.locator('text=NuevoPost').click();
        // Click textarea
        await page.locator('textarea').click();
        // Fill textarea
        await page.locator('textarea').fill('----Se añade descripcion del post----');
        // Click div[role="button"]:has-text("Update")
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click button:has-text("Update")
        await page.locator('button:has-text("Update")').click();
        // Captura de pantalla
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
            await page.goto('http://localhost:2368/ghost/#/dashboard'),
            await page.screenshot({ path: 'screenshots/Post editado.png', fullPage: true })
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