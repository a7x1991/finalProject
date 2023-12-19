import { expect } from '@wdio/globals'
import searchSaber from '../pageobjects/searchSaber.js'


describe('Search Bar', () => {
    it('Should search for the Retribution V3 Saber', async () => {
        await browser.maximizeWindow()
        await searchSaber.openUrl()
        await searchSaber.searchClick('Retribution V3')
    })
})

describe('Click Retribution Saber', () => {
    it('It should click the Retribution V3 Saber image', async () => {
        await searchSaber.clickSaberImage()
    })
})

describe('Click add to cart button', () => {
    it('It should click the add to cart button', async () => {
        await searchSaber.clickAddToCart()
    })
})