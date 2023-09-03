const { test, expect} = require('@playwright/test');

test('My first test ', async ({page}) => {

        await page.goto('https://coingecko.com');
        await expect(page).toHaveTitle('Cryptocurrency Prices, Charts, and Crypto Market Cap | CoinGecko');
})
