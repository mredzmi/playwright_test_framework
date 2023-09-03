const { test, expect} = require('@playwright/test');

test('test', async ({ page }) => {

  //launch website  
  await page.goto('https://coinmarketcap.com/');

  //go to search field
  await page.getByText('Search', { exact: true }).click();

  //search dogechain
  await page.getByPlaceholder('Search coin, pair, contract address or exchange').fill('dogechain');
  await page.getByRole('link', { name: 'Dogechain Dogechain DC Select ↵' }).click();
});