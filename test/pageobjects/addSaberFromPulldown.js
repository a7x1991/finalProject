import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import webpage from './webpage.js';

class addSaberFromPulldown extends webpage {

    get shopPulldown () {
        return $('//p[contains(text(),"Shop")]')
    }
    get scavengerV3 () {
        return $('//h3[contains(text(),"Scavenger V3")]')
    }
    get blackColorSaber () {
        return $('[style="background-color: rgb(0, 0, 0);"]')
    }
    get buyNow () {
        return $('//span[contains(text(),"Buy Now")]')
    }
    async clickShopPulldown () {
        await this.shopPulldown.moveTo()
        await this.shopPulldown.click()
    }
    async clickScavengerV3 () {
        await this.scavengerV3.waitForClickable()
        await expect(this.scavengerV3).toBeExisting
        await this.scavengerV3.click()
        await this.blackColorSaber.waitForClickable()
        await this.blackColorSaber.moveTo()
        await this.blackColorSaber.click()
        await expect(this.buyNow).toBeExisting()
        await browser.switchToFrame(null)
        await this.buyNow.waitForClickable()
        await this.buyNow.click()
    }
    openUrl () {
        return super.openUrl();
    }
}


export default new addSaberFromPulldown();
