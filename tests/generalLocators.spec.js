import { test, expect } from '@playwright/test';

test('single element locating', async ({page}) => {
    
    await page.goto("opencart/index.php?route=account/register");

    const firstNameTxt = page.locator("#input-firstname");
    const lastNameTxt = page.locator("input[name='lastname']");
    const emailTxt = page.locator("//input[@name='email']");

    await firstNameTxt.fill('pranto');
    await lastNameTxt.fill('das');
    await emailTxt.fill('abc@gmail.com');

    await page.pause();

});