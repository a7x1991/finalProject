import { $ } from '@wdio/globals'
import webpage from './webpage.js';

class addTwoSabersToCart extends webpage {

    get shopNow () {
        return $('#comp-lmfsewxf3');
    }
    get scavengerSaber () {
        return $('//h3[contains(text(),"Scavenger")]')
    }
    get silverColorSaber () {
        return $('[style="background-color: rgb(192, 192, 192);"]')
    }
    get blackColorSaber () {
        return $('[style="background-color: rgb(0, 0, 0);"]')
    }
    get clickBackIcon () {
        return $('.icon')
    }
    get addToCart () {
        return $('//span[contains(text(),"Add to Cart")]')
    }
    get viewCart () {
        return $('[data-hook="widget-view-cart-button"]')
    }
    get myCartHeader () {
        return $('//h1[contains(text(),"My cart")]')
    }

    async clickShopNow () {
        await expect(this.shopNow).toBeExisting()
        await this.shopNow.click()
    }
    async clickScavengerSaber () {
        await this.scavengerSaber.waitForClickable()
        await expect(this.scavengerSaber).toBeExisting()
        await this.scavengerSaber.click()
    }
    async clickBlackAndSilverHilt () {
        await this.silverColorSaber.waitForClickable()
        await expect(this.silverColorSaber).toBeExisting()
        await this.silverColorSaber.moveTo()
        await this.silverColorSaber.click()
        await expect(this.addToCart).toBeExisting()
        await browser.switchToFrame(null)
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
        await browser.switchToFrame(2)
        await expect(this.clickBackIcon).toBeExisting()
        await this.clickBackIcon.moveTo()
        await this.clickBackIcon.click()
        await browser.switchToFrame(null)
        await this.blackColorSaber.moveTo()
        await this.blackColorSaber.waitForClickable()
        await this.blackColorSaber.click()
        await expect(this.addToCart).toBeExisting()
        await browser.switchToFrame(null)
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }
    async viewCartButton () {
        await browser.switchToFrame(2)
        await expect(this.viewCart).toBeExisting()
        await this.viewCart.waitForClickable()
        await this.viewCart.click()
        await browser.switchToFrame(null)
        await expect(this.myCartHeader).toBeExisting()
    }

    openUrl () {
        return super.openUrl();
    }
}


export default new addTwoSabersToCart();
