import { test, expect } from "@playwright/test";

const credentials = {
    page: 'http://localhost:2368/ghost/#/signin',
    siteTitle: 'TestSiteElsa',
    fullName: 'Elsa Pato',
    email: 'correo@correo.com',
    pass: 'ElsaTest15+'
  };

test("Prueba", async ({ page }) => {
    // Entrar a la página
    await page.goto(credentials.page);
    
    // Ingresar Email
    await page
    .locator('#ember7')
    .fill(credentials.email);
    
    // Ingresar Password
    await page.locator('#ember9').fill(credentials.pass);
    
    // Clic en Sign in
    await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/dashboard' }*/),
    page.locator('#ember11').click(),
    // await page.pause()
    ]);
    // Click en Posts
    await page.locator('#ember26').click();
    await expect(page).toHaveURL('http://localhost:2368/ghost/#/posts');

    // Post Nuevo3
    // const locator = page.locator('Nuevo3');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
        // await expect(locator).toContainText('Nuevo3'),
        await page.locator('text=Nuevo3').click(),
        await page.pause()
    ]);
        







//     // Click #ember26
//     await Promise.all([
//     page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/posts' }*/),
//     page.locator("#ember26").click(),
//     ]);
//     // Click text=New post
//     await page.locator("text=New post").click();
//     await expect(page).toHaveURL("http://localhost:2368/ghost/#/editor/post");
//     // Fill textarea
//     await page.locator("textarea").fill("Otro Post");
//     // Click .koenig-editor__editor
//     await Promise.all([
//     page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/post/6276ad360569ae06343c1dfc' }*/),
//     page.locator(".koenig-editor__editor").click(),
//     ]);
//     // Click div[role="button"]:has-text("Publish")
//     await page.locator('div[role="button"]:has-text("Publish")').click();
//     // Click button:has-text("Publish")
//     await page.locator('button:has-text("Publish")').click();
//     // Click button:has-text("Publish")
//     await page.locator('button:has-text("Publish")').click();
//     // Click span:has-text("Posts")
//     // await page.locator('span:has-text("Posts")').click();
//   // await expect(page).toHaveURL('http://localhost:2368/ghost/#/posts');
});
