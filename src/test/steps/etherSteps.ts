import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";


let browser: Browser;
let page: Page;

Given('User navigates to the etherscan', async function () {
    browser = await chromium.launch({ headless:false })
    page = await browser.newPage();
    await page.goto("https://etherscan.io/login");
  });

Given('User enter the username as the {string}', async function (username) {
    await page.locator("(//input[contains(@class,'form-control form-control-lg')])[2]").type(username);
    });

Given('User enter the password as the {string}', async function (password) {
    await page.locator("//input[contains(@class,'js-toggle-password form-control')]").type(password);

    });

When('User click on the login', async function () {
    await page.locator("(//div[@class='captcha-solver captcha-solver_inner']//div)[2]").click();
    await page.locator("//input[contains(@class,'btn btn-lg')]").click();
    });

Then('Login should be logged', async function () {
const text = await page.locator("//div[contains(@class,'d-flex flex-wrap')]//h1[1]").textContent();
console.log("Username: " + text) ;
    await browser.close();
    });

