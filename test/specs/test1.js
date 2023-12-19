import addOneSaberToCart from '../pageobjects/addDivergentSaber.js'


describe('Shop now', () => {
    it('it should click the shop now tab', async () => {
        await browser.maximizeWindow()
        await addOneSaberToCart.openUrl()
        await addOneSaberToCart.clickShopNow()
    })
})

describe('Divergent V3', () => {
    it('Should click the Divergent V3 Lighsaber option', async () => {
        await addOneSaberToCart.clickDivergentV3()
    })
})

describe('click the plus button', () => {
    it('it should click the add to cart button', async () => {
        await addOneSaberToCart.addToCartButton()
    })
})

describe('click the view cart button', () => {
    it('it should click the view cart button', async () => {
        await addOneSaberToCart.viewCartButton()
    })
})