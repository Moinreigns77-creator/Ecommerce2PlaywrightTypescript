import { test, expect } from "@playwright/test";
import { POManager } from "../pages/POManager";

const data = require("../JsonFiles/registerData.json")

test("Login to Application with valid email and password and logout", async ({ page }) => {
  await page.goto("https://automationexercise.com/");

  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const homePage = poManager.getHomePage();

  await loginPage.loginUser("Moin1@gmail.com", data.password)
  await homePage.logoutUser();

})

test("login to Application with Invalid Credentials", async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await page.goto("https://automationexercise.com/");
  await loginPage.loginUserInvalidCredentials("abc1@gmail.com", "Abc@123");
})