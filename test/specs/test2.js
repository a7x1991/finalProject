import { expect } from '@wdio/globals'
import addTwoSabersToCart from '../pageobjects/addTwoSabers.js'


describe('Shop now', () => {
    it('it should click the shop now tab', async () => {
        await browser.maximizeWindow()
        await addTwoSabersToCart.openUrl()
        await addTwoSabersToCart.clickShopNow()
    })
})

describe('Scavenger Saber', () => {
    it('Should click the Scavenger Lighsaber option', async () => {
       await addTwoSabersToCart.clickScavengerSaber()
    })
})

describe('Black and Silver Saber', () => {
    it('Should click the Silver and Black hilt saber options and add them to  the cart', async () => {
        await addTwoSabersToCart.clickBlackAndSilverHilt()
    })
})

describe('View Cart button', () => {
    it('Should click the view cart button', async () => {
        await addTwoSabersToCart.viewCartButton()
    })
})