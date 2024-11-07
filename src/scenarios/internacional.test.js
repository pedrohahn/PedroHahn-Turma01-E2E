import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cnnbrasil.com.br/');

  // Clica para abrir o menu
  await page.locator('#header__trigger').check();

  // Clica no link "Internacional"
  await page.getByRole('banner').getByRole('link', { name: 'Internacional' }).click();

   // Verifica se a URL é a esperada
  await expect(page).toHaveURL('https://www.cnnbrasil.com.br/internacional/');
});