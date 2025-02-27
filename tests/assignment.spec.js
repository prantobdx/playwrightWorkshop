import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { generateRandomNumber } from "../Utlis/utlis.js"

test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

      // Step 1: Visit URL and Click on SignUp/Login
  await page.goto('https://automationexercise.com/');
  await page.locator('a[href="/login"]').click();
    
     // Step 2: Fill new user signup with Faker
    await page.locator('input[data-qa="signup-name"]').fill('pranto das');
    await page.locator('input[data-qa="signup-email"]').fill(faker.internet.email());
    await page.locator('button[data-qa="signup-button"]').click();
    

// Step 3: Fill Registration Form
    await page.locator('input#id_gender1').check();
    await page.locator('input#password').fill('Test@1234');

  // DOB
    await page.locator('select#days').selectOption('12');
    await page.locator('select#months').selectOption('December');
    await page.locator('select#years').selectOption('2002');

// Address Information
    const NameTxt = page.locator('input#first_name') ;
    await NameTxt.fill('pranto');
 await page.locator('input#last_name').fill('das');
 await page.locator('input#company').fill('Road to sdet');
 await page.locator('input#address1').fill(faker.location.streetAddress());
 await page.locator('input#address2').fill('Near Lake');
await page.locator('select#country').selectOption('Australia');
await page.locator('input#state').fill('New South Wales');
await page.locator('input#city').fill('Sydney');
await page.locator('input#zipcode').fill('2000');
await page.locator('input#mobile_number').fill(faker.phone.number('+61 4## ### ###'));

await page.locator('button[data-qa="create-account"]').click();

// Assert Congratulations message
await expect(page.locator('h2[data-qa="account-created"]')).toHaveText('Account Created!');

// Step 4: Login check, Select product, Add to cart
await page.locator('a[data-qa="continue-button"]').click();


await page.locator('//a[@href="login"]').click(); 
await expect(page.locator('a')).toContainText(`Logged in as ${NameTxt}`);

// Go to Product
await page.locator('a[href="/product_details/1"]').click(); // Blue Top
await page.locator('input#quantity').fill('3');
await page.locator('button[text="Add to cart"]').click();

// Assert Add to cart message
await expect(page.locator('div.modal-content')).toContainText('Your product has been added to cart');

await page.locator('a[href="/view_cart"]').click();

// Step 5: Assert total price Rs. 1500
const totalPrice = await page.locator('td.cart_total_price').innerText();
expect(totalPrice.trim()).toBe('Rs. 1500');

    await page.pause()
});