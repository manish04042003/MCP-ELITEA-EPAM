import { test, expect } from '@playwright/test';

test('EPAM Client Work Navigation Test', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');
  
  // Set viewport to full screen
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Accept cookies if the modal is visible
  const cookieModal = page.locator('div[class*="cookie-disclaimer"]');
  if (await cookieModal.isVisible()) {
    await page.locator('button[class*="cookie-disclaimer__button"]').click();
  }
  
  // Click on Services in the header menu
  await page.locator('a[href="/services"]').click();
  
  // Click on "Explore Our Client Work" link
  await page.locator('a:has-text("Explore Our Client Work")').click();
  
  // Verify that "Client Work" text is visible on the page
  await expect(page.locator('h1:has-text("Client Work")')).toBeVisible();
});