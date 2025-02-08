import { test, expect } from '@playwright/test';
const loginPage=require("../pageObjects/login")

test('Login to application', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
   const loginpage=new loginPage(page)
   await loginpage.loginToApplication()
  
});

