import { Page, expect, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class MyAccountPage {

    private readonly page: Page

    // locators
    private readonly btnContinue: Locator 


    // constructor
    constructor(page: Page){
        this.page = page
        this.btnContinue = this.page.getByRole('button', {name: 'Continue'})
    }

    // action methods

    // Click Continue
    async clickContinue(){
        await this.btnContinue.click()
        return new HomePage(this.page);
    }

}
