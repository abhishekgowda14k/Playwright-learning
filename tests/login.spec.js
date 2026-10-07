import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: '使用者名稱' }).click();
  await page.getByRole('textbox', { name: '使用者名稱' }).fill('Admin');
  await page.getByRole('textbox', { name: '密碼' }).click();
  await page.getByRole('textbox', { name: '密碼' }).fill('admin123');
  await page.getByRole('button', { name: '登錄' }).click();
  await expect(page.getByRole('heading', { name: '儀表板' })).toBeVisible();
});