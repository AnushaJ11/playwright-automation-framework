import { Page, expect, Locator } from "@playwright/test";

export class MyAccountPage {

    private readonly page: Page

    // locators
    private readonly msgHeading: Locator 
    private readonly lnkLogout: Locator


    // constructor
    constructor(page: Page){
        this.page = page
        this.msgHeading = this.page.locator("a[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']")
        this.lnkLogout = this.page.getByRole('link', {name: 'Logout'})
    }

    // action methods

    // Check if myaccountpage exists
    async isMyAccountPageExists() {
        try{
            const isVisible = await this.msgHeading.isVisible()
            return isVisible
        }catch(error){
            console.log(`Error checking My Account page heading visibility: ${error}`)
        }
    }

    // click "My Account" link
    async clickMyAccount(){
        try{
            await this.msgHeading.click()
        } catch(error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`)
            throw error
        }
    }

    // Click Logout
    async clickLogout(){
        try{
            await this.lnkLogout.click()
        } catch(error){
            console.log(`Exception occurred while clicking 'Logout': ${error}`)
            throw error
        }
    }

}


/**
 * 
 * 
 */