import { $ } from '@wdio/globals'
import Page from './page.js';

class searchSaberAddToCart extends Page {

    get searchButton () {
        return $('#input_search-box-input-comp-lmfsw2zy')
    }

    get clickRetributionSaber () {
        return $('//span[contains(text(),"Retribution V3")]')
    }

    get clickRetributionSaberImage () {
        return $('[alt="Retribution V3"]')
    }

    get addToCart () {
        return $('//span[contains(text(),"Add to Cart")]')
    }

    get silverColorSaber () {
        return $('.ColorPickerItem3084768627__radioInner')
    }

    get viewCart () {
        return $('[data-hook="widget-view-cart-button"]')
    }

    get payPalLogo () {
        return $('[alt="Payment method logo"]')
    }

    get sideWindowBar () {
        return $('.cart-content')
    }

    get buyNow () {
        return $('//span[contains(text(),"Buy Now")]')
    }

    async searchClick (lighsaberName) {
        await expect(this.searchButton).toBeExisting();
        await this.searchButton.setValue(lighsaberName);
        await browser.keys("\uE007");
    }
    async clickSaberImage () {
        await expect(this.clickRetributionSaberImage).toBeExisting();
        await this.addToCart.waitForClickable()
        await this.clickRetributionSaberImage.moveTo()
        await this.clickRetributionSaberImage.click()
    }

    async clickAddToCart () {
        await expect(this.payPalLogo).toBeExisting()
        await this.payPalLogo.moveTo()
        await this.silverColorSaber.waitForClickable()
        await this.silverColorSaber.moveTo()
        await this.silverColorSaber.click()
        await expect(this.buyNow).toBeExisting()
        await browser.switchToFrame(null)
        await this.buyNow.waitForClickable()
        await this.buyNow.click()
        // await browser.pause(4000)

        // await this.sideWindowBar.moveTo()
        // await this.sideWindowBar.waitForClickable()
        // await expect(this.viewCart).toBeExisting()
        // await this.viewCart.waitForClickable()
        // await this.viewCart.click()
        // await browser.switchToFrame(null)
        // await expect(this.myCartHeader).toBeExisting()
    }


    openUrl () {
        return super.openUrl();
    }
}




export default new searchSaberAddToCart();
