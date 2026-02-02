import { expect, Page } from "@playwright/test";

export class Login {
    page: Page;
    homeHeading: string;
    signup_loginBtn: string;
    email: string;
    password: string;
    loginBtn: string;
    loggedInAsHeading: string;
    logoutBtn: string;
    loginFailStatus: string;
    
    constructor(page: Page) {
        this.page = page
        this.homeHeading = "//h2[normalize-space()='Features Items']"
        this.signup_loginBtn = "//a[normalize-space()='Signup / Login']"
        this.email = "input[data-qa='login-email']"
        this.password = "input[data-qa='login-password']"
        this.loginBtn = "button[data-qa='login-button']"
        this.loggedInAsHeading = "//a[contains(text(),'Logged in as')]"
        this.logoutBtn = "//a[normalize-space()='Logout']"

        this.loginFailStatus = "//p[normalize-space()='Your email or password is incorrect!']"
    }

    async loginUser(email: string, password: string) {
        //  await expect(this.page.locator(this.homeHeading)).toBeVisible();
        await this.page.locator(this.signup_loginBtn).click();

        // await this.page.waitForLoadState("networkidle");

        await expect(this.page.locator("h2:has-text('Login to your account')")).toBeVisible();
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();

        // await this.page.waitForLoadState("networkidle");

        await expect(this.page.locator(this.loggedInAsHeading)).toBeVisible();
    }

    async loginUserInvalidCredentials(email: string, password: string) {
        await expect(this.page.locator(this.homeHeading)).toBeVisible();
        await this.page.locator(this.signup_loginBtn).click();

        await expect(this.page.locator("h2:has-text('Login to your account')")).toBeVisible();
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();

        await expect(this.page.locator(this.loginFailStatus)).toBeVisible();
    }
}

