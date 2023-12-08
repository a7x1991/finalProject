import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import loginPage from '../pageobjects/login.page.js'


describe('Shop now', () => {
    it('it should click the shop now tab', async () => {
        await LoginPage.openUrl()
        await LoginPage.clickShopNow()
    })
})

describe('Divergent V3', () => {
    it('Should click the Divergent V3 Lighsaber option', async () => {
        await LoginPage.clickDivergentV3()
    })
})

describe('click the plus button', () => {
    it('it should click the plus botton till inventory is maxed out', async () => {
        await loginPage.clickPlusButton()
        await browser.pause(10000)
    })
})

// describe('Login successfully', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.openUrl()
//         await LoginPage.login('standard_user', 'secret_sauce')
//         await expect(LoginPage.shoppingCart).toBeExisting() 
//     })
// })


