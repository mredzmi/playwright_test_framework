const { test, expect} = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Replace with your API endpoint URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  await page.goto(apiUrl, {
    waitUntil: 'domcontentloaded',
  });

  // Get the API response text
  const apiResponse = await page.textContent('pre');

  try {
    const data = JSON.parse(apiResponse);
    // Perform your API response validation here
    console.log('API Response:', data);
  } catch (error) {
    console.error('Error parsing API response:', error);
  }

  await browser.close();
})();
