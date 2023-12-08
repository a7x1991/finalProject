import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get shopNow () {
        return $('#comp-lmfsewxf3');
    }

    get divergentV3 () {
        return $('//h3[contains(text(),"Divergent V3")]')
    }

    get clickPlus () {
        return $('._11lkb')
    }

    get clickPlusDisabled () {
        return $('._11lkb._4Irna')
    }

    get addToCart () {
        return $x('//span[contains(text(),"Add to Cart")]')
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
        await expect(this.clickPlus).toBeExisting()
        await this.clickPlus.click()

        // while (await this.clickPlus.isClickable()) {
        //     await this.clickPlus.click()
        //     if (await this.clickPlusDisabled.toBeExisting()) {
        //         break;
        //     }
        // }
            
    }

    // async login (username, password) {
    //     await this.inputUsername.setValue(username)
    //     await this.inputPassword.setValue(password)
    //     await this.btnSubmit.click()
    //     await expect(this.shoppingCart).toBeExisting()
    // }
    

    openUrl () {
        return super.openUrl();
    }
}




export default new LoginPage();
