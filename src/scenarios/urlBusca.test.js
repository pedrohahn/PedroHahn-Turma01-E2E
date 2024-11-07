import { test, expect } from '@playwright/test';

test('Realizar busca e verificar URL', async ({ page }) => {
  // Acessa o site da CNN Brasil
  await page.goto('https://www.cnnbrasil.com.br/');

  // Clica no botão de busca
  await page.getByRole('button', { name: 'Buscar' }).click();

  // Insere o termo "vasco" na barra de pesquisa e pressiona Enter
  await page.getByPlaceholder('Pesquisar na CNN Brasil').fill('vasco');
  await page.getByPlaceholder('Pesquisar na CNN Brasil').press('Enter');

  // Verifica se a URL é a esperada
  await expect(page).toHaveURL('https://www.cnnbrasil.com.br/?s=vasco&orderby=date&order=desc');
});
