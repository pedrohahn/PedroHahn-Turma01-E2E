const { test, expect } = require('@playwright/test');

test('Acessar o site da CNN Brasil e verificar título da página', async ({ page }) => {
  // Acessa o site da CNN Brasil
  await page.goto('https://www.cnnbrasil.com.br/');

  // Verifica se o título da página contém "CNN Brasil"
  await expect(page).toHaveTitle(/CNN Brasil/);
});
