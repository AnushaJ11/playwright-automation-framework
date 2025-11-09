import { Page, expect, Locator } from "@playwright/test";

export class HomePage {

    private readonly page: Page

    // locators
    private readonly linkMyAccount: Locator 
    private readonly linkRegister: Locator
    private readonly linkLogin: Locator
    private readonly txtSearchBox: Locator
    private readonly btnSearch: Locator

    // constructor
    constructor(page: Page){
        this.page = page
        this.linkMyAccount = page.locator("[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']")
        this.linkRegister = page.getByRole('link', {name: 'Register'})
        this.linkLogin = page.getByRole('link', {name: 'Login'})
        this.txtSearchBox = page.locator("input[name='search']")
        this.btnSearch = page.getByRole('button', {name : 'Search'})
    }

    // action methods

    // Check if homepage exists
    async isHomePageExists() {
        const title: string = await this.page.title()
        if(title){
            return true
        }else{
            return false
        }
    }

    // click "My Account" link
    async clickMyAccount(){
        try{
            await this.linkMyAccount.click()
        } catch(error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`)
            throw error
        }
    }

    // Click Register link
    async clickRegister() {
        try {
            await this.linkRegister.click()
        } catch(error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`)
            throw error
        }
    }

    // Click Login
    async clickLogin(){
        try{
            await this.linkLogin.click()
        } catch(error){
            console.log(`Exception occurred while clicking 'Login': ${error}`)
            throw error
        }
    }

    // Enter product name
    async enterProductName(pName: string){
        try{
            await this.txtSearchBox.fill(pName);
        }catch(error){
            console.log(`Exception occurred while entering product name': ${error}`)
            throw error
        }
    }

    // Click Search
    async clickSearch(){
        try {
            await this.btnSearch.click()
        }catch(error){
            console.log(`Exception occurred while clicking 'Search': ${error}`)
            throw error
        }
    }

}


/**
 * 
 * 
 */