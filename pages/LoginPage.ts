import {Page, expect, Locator} from '@playwright/test';

export class LoginPage {

    private readonly page: Page

    // Locators
    private readonly emailAddress: Locator
    private readonly password: Locator
    private readonly login: Locator
    private readonly myAccount: Locator
    private readonly textErrorMessage: Locator

    // Constructor
    constructor(page){
        this.page = page
        this.emailAddress = this.page.locator('#input-email')
        this.password = this.page.locator('#input-password')
        this.login = this.page.getByRole('button', {name:'Login'})
        this.myAccount = this.page.getByText('My Account')
        this.textErrorMessage = this.page.locator('.fa.fa-exclamation-circle')
    }

    //action methods

    /**
     * Enters email address on login page
     * @param email - Enter email value
     */
    async setEmailAddress(email: string){
        await this.emailAddress.fill(email);
    }

    /**
     * Enters password on login page
     * @param password - Enter password value
     */
    async setPassword(password: string){
        await this.password.fill(password);
    }

    /**
     * Click login button on Login page
     */
    async clickLogin(){
        await this.login.click()
    }

    /**
     * Login user
     * @param email - User email 
     * @param password - User password
     */
    async userLogin(email: string, password: string){
        await this.setEmailAddress(email)
        await this.setPassword(password)
        await this.clickLogin()
    }

    /**
     * Validate successful login
     */
    async validateSuccessfulLogin(){
        await expect(this.myAccount).toBeVisible();
    }

    async getLoginErrorMessage(){
        return this.textErrorMessage;
    }
}