import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Shop now', () => {
    it('it should click the shop now tab', async () => {
        await browser.maximizeWindow()
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
    it('it should click the add to cart button', async () => {
        await LoginPage.addToCartButton()
    })
})

describe('click the view cart button', () => {
    it('it should click the view cart button', async () => {
        await LoginPage.viewCartButton()
    })
})