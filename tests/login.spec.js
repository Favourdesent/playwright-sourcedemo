import { expect, test } from '@playwright/test'

test ('login test', async ({browser})=>{

const context = await browser.newContext()
const page = await context.newPage()

await page.goto('https://www.saucedemo.com/')
await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
await page.locator('#add-to-cart-sauce-labs-backpack').click()
await expect(page.locator('#remove-sauce-labs-backpack')).toHaveText('Remove');
await page.locator('#add-to-cart-sauce-labs-bike-light').click()
await expect(page.locator('#remove-sauce-labs-bike-light')).toHaveText('Remove');
})