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
        await this.clickPlus.click(200)
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
