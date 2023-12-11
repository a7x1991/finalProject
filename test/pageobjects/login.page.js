import { $ } from '@wdio/globals'
import Page from './page.js';
import { browser } from '@wdio/globals'

class LoginPage extends Page {

    get shopNow () {
        return $('#comp-lmfsewxf3');
    }

    get divergentV3 () {
        return $('//h3[contains(text(),"Divergent V3")]')
    }

    get clickPlus () {
        return $('[data-hook="number-input-spinner-up-arrow"]')
    }

    get clickPlusDisabled () {
        return $('._11lkb._4Irna')
    }

    get addToCart () {
        return $x('//span[contains(text(),"Add to Cart")]')
    }

    get hoverPlusIcon () {
        return $('[data-hook="number-input-spinner-input"]')
    }

    get payPalPopup () {
        return $('[data-hook="pmb-expanded-view"]')
    }

    async clickShopNow() {
        await expect(this.shopNow).toBeExisting()
        await this.shopNow.click()
    }

    async clickDivergentV3 () {
        await this.divergentV3.waitForClickable()
        await expect(this.divergentV3).toBeExisting()
        await this.divergentV3.click()
    }

    async clickPlusButton() {
        await this.payPalPopup.moveTo()
        await browser.switchToFrame(2)
        await this.hoverPlusIcon.moveTo()
        await this.clickPlus.moveTo()
        await this.clickPlus.click()

        // while (await this.clickPlus.isClickable()) {
        //     await this.clickPlus.click()
        //     if (await this.clickPlusDisabled.toBeExisting()) {
        //         break;
        //     }
        // }
            
    }



    openUrl () {
        return super.openUrl();
    }
}




export default new LoginPage();
