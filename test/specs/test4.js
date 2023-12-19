import { expect } from '@wdio/globals'
import addSaberFromPulldown from '../pageobjects/addSaberFromPulldown.js'


describe('Shop Pulldown', () => {
    it('Should click Shop pulldown Menu', async () => {
        await browser.maximizeWindow()
        await addSaberFromPulldown.openUrl()
        await addSaberFromPulldown.clickShopPulldown()
    })
})

describe('Click Scavenger Saber', () => {
    it('Should scroll down to the Scavenger Saber and click it', async () => {
        await addSaberFromPulldown.clickScavengerV3()
    })
})

