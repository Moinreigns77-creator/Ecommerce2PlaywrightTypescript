import { test, expect } from "@playwright/test"
import { POManager } from "../pages/POManager"
const data = require("../JsonFiles/registerData.json")

test("Verify Subscription in cart page", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();
    await cartPage.verifySubscribtion("abcd@gmail.com");
})

test("Place Order: Register while Checkout", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();
    const productPage = poManager.getProductPage();
    const homePage = poManager.getHomePage();

    await productPage.addProducts();

    await cartPage.checkoutProductsAndRegister();

    await homePage.deleteAccount();
})

test("Place Order: Register berfore Checkout", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();

    const homePage = poManager.getHomePage()
    await cartPage.registerAndCheckoutProducts();

    await homePage.deleteAccount();

})


test("Place Order: Login before Checkout", async ({ page }) => {

    await page.goto("https://automationexercise.com/");

    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();
    const homePage = poManager.getHomePage();

    await cartPage.loginBeforeCheckout();

    await homePage.logoutUser();


})


test("Remove Products From Cart", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();

    await cartPage.removeProductFromCart();

})


test(" Verify address details in checkout page", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();
    const productPage = poManager.getProductPage()
    const homePage = poManager.getHomePage();
    const registerPage = poManager.getRegisterPage()

    await registerPage.registerUser(data.name, data.email, data.title, data.password, data.day, data.month, data.year, data.firstName, data.lastName, data.company, data.address1, data.address2, data.country, data.state, data.city, data.zipcode, data.mobile);

    await productPage.addProducts();

    await cartPage.verifyDeliveryAndBillingAddress();

    await homePage.deleteAccount();

})


test("Download Invoice after purchase order", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const poManager = new POManager(page);
    const cartPage = poManager.getCartPage();
    const productPage = poManager.getProductPage();
    const homePage = poManager.getHomePage();
    const registerPage = poManager.getRegisterPage();

    await registerPage.registerUser(data.name, data.email, data.title, data.password, data.day, data.month, data.year, data.firstName, data.lastName, data.company, data.address1, data.address2, data.country, data.state, data.city, data.zipcode, data.mobile);

    await productPage.addProducts();

    await cartPage.verifyDeliveryAndBillingAddress();

    await cartPage.downloadInvoice();

    await homePage.deleteAccount();

})