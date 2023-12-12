import { $ } from '@wdio/globals'
import Page from './page.js';
// import { browser } from '@wdio/globals'

class LoginPage extends Page {

    get shopNow () {
        return $('#comp-lmfsewxf3');
    }

    get divergentV3 () {
        return $('//h3[contains(text(),"Divergent V3")]')
    }

    get addToCart () {
        return $('//span[contains(text(),"Add to Cart")]')
    }

    get viewCart () {
        return $('[data-hook="widget-view-cart-button"]')
    }

    async clickShopNow () {
        await expect(this.shopNow).toBeExisting()
        await this.shopNow.click()
    }

    async clickDivergentV3 () {
        await this.divergentV3.waitForClickable()
        await expect(this.divergentV3).toBeExisting()
        await this.divergentV3.click()
    }

    async addToCartButton () {
        await expect(this.addToCart).toBeExisting()
        await browser.switchToFrame(null)
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }

    async viewCartButton () {
        await expect(this.viewCart).toBeExisting()
        await this.viewCart.click()
    }

    // async clickPlusButton() {
    //     await this.payPalPopup.moveTo()
    //     await browser.switchToFrame(2)
    //     await this.hoverPlusIcon.moveTo()
    //     await this.clickPlus.moveTo()
    //     await this.clickPlus.click()

        // while (await this.clickPlus.isClickable()) {
        //     await this.clickPlus.click()
        //     if (await this.clickPlusDisabled.toBeExisting()) {
        //         break;
        //     }
        // }
            
    // }



    openUrl () {
        return super.openUrl();
    }
}




export default new LoginPage();
