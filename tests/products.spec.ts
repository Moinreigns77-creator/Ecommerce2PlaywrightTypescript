import { test, expect } from "@playwright/test"

import { POManager } from "../pages/POManager";

test("Verify All Products and product detail page", async ({ page }) => {

    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();

    await productPage.verifyProducts();



})

test("Search Products", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();
    await productPage.searchProduct("shirt");
})

test("Add products and verify name,price,quantity and total price in cart page", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();
    await productPage.addProductsAndCompareNamePrice();
})

test("Verify Product quantity in Cart", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();
    await productPage.verifyProductQuantity("40");
})

test("Verify Brand", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();
    await productPage.verifyBrand();
})


test("Search Products and Verify Cart After Login", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();
    await productPage.searchProdAndVerifyCartAfterLogin();
})


test.only(" Add review on product", async ({ page }) => {
    await page.goto("https://automationexercise.com/")
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage(); await productPage.addReviewOnProduct("Moin", "Moin1@gmail.com", "Testing");
})


