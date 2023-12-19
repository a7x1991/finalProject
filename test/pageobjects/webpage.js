import { browser } from '@wdio/globals'

export default class webpage {
  
    openUrl () {
        return browser.url(`https://www.imperialworkshop.com/`)
    }
}
