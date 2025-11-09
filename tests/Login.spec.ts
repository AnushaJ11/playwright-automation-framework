/**
 * Test Case: Login with valid credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application url
 * 2) Navigate to Login page via homepage
 * 3) Enter valid credentials and login
 * 4) Verify successful login by checking 'My Account' page presence
 * 
 */

import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { MyAccountPage } from '../pages/MyAccountPage'
import { TestConfig } from '../test.config'
import { RandomDataUtil } from '../utils/randomDataGenerator'

let config: TestConfig
let homePage: HomePage
let loginPage: LoginPage
let myAccountPage: MyAccountPage

test.beforeEach(async({page})=> {

    config = new TestConfig()
    await page.goto(config.appUrl)

    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('User login test @master @sanity @regression', async({})=> {
    await homePage.clickMyAccount();
    await homePage.clickLogin()
    await loginPage.userLogin(config.email, config.password)
    const isLoggedIn = await myAccountPage.isMyAccountPageExists()
    await expect(isLoggedIn).toBeTruthy;

})  