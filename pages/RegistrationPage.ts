import {Page, expect, Locator} from '@playwright/test';

export class RegistrationPage {

    private readonly page: Page

    // locators
    private readonly firstName: Locator
    private readonly lastName: Locator
    private readonly email: Locator
    private readonly telephone: Locator
    private readonly password: Locator
    private readonly passwordConfirm: Locator
    private readonly agreeCheckbox : Locator
    private readonly continue: Locator
    private readonly accountCreationSuccessfulMessage: Locator

    // constructor
    constructor(page: Page){
        this.page = page
        this.firstName = page.locator("#input-firstname")
        this.lastName = page.locator("#input-lastname")
        this.email = page.locator("#input-email")
        this.telephone = page.locator("#input-telephone")
        this.password = page.locator("#input-password")
        this.passwordConfirm = page.locator("#input-confirm")
        this.agreeCheckbox = page.locator("input[type='checkbox'][name='agree']")
        this.continue = page.locator("input[type='submit'][value='Continue']")
        this.accountCreationSuccessfulMessage = page.getByText("Congratulations! Your new account has been successfully created!");
    }

    // action methods

    /**
     * Sets the first name in the registration form
     * @param firstName - First name to enter
     */
    async setFirstName(firstName: string){
        await this.firstName.fill(firstName)
    }

    /**
     * Sets the last name in the registration form
     * @param lastName  - Last name to enter
     */
    async setLastName(lastName: string){
        await this.lastName.fill(lastName)
    }

    /**
     * Sets the email in the registration form
     * @param email - Email to enter
     */
    async setEmail(email: string){
        await this.email.fill(email)
    }

    /**
     * Sets the telephone in the registration form
     * @param telephone - Telephone to enter
     */
    async setTelephone(telephone: string){
        await this.telephone.fill(telephone);
    }

    /**
     * Sets the password in the registration form
     * @param password - Password to enter
     */
    async setPassword(password: string){
        await this.password.fill(password)
    }

    /**
     * Sets the confirm password in the registration form
     * @param confirmpassword -  Confirm Password to enter
     */
    async setConfirmPassword(password: string){
        await this.passwordConfirm.fill(password);
    }

    /**
     * CLick Agree checkbox
     */
    async clickAgreeCheckbox(){
        await this.agreeCheckbox.check()
    }

    /**
     * Click Continue button
     */
    async clickContinueButton(){
        await this.continue.click()
    }

    /**
     * Validate successful message
     */
    async validateAccountCreation(){
        return this.accountCreationSuccessfulMessage;
    }
}