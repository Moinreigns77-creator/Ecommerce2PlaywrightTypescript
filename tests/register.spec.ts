import { test, expect } from "@playwright/test"
import { POManager } from "../pages/POManager"
const data = require("../JsonFiles/registerData.json")

test("Register into Application", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const registerPage = poManager.getRegisterPage();
    const homePage = poManager.getHomePage();
    await registerPage.registerUser(data.name, data.email, data.title, data.password, data.day, data.month, data.year, data.firstName, data.lastName, data.company, data.address1, data.address2, data.country, data.state, data.city, data.zipcode, data.mobile);

    await homePage.logoutUser();
})

test("Register with existing email id", async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const registerPage = poManager.getRegisterPage();
    await registerPage.registerUserWithExistingEmail(data.name, data.email);


})