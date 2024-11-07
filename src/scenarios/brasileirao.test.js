
const { test, expect } = require('@playwright/test');

test('Verificar link de Esportes', async ({ page }) => {
  // Acessa a página
  await page.goto('https://www.cnnbrasil.com.br/');

  // Localiza o link com base no atributo 'href'
  const esporteLink = page.locator('a[href="/esportes/"]'); // Seleciona o link com href '/esportes/'

  // Verifica se o link está visível
  await expect(esporteLink).toBeVisible();

  // Clica no link de "Esportes"
  await esporteLink.click();

  // Verifica se a URL mudou corretamente
  await expect(page).toHaveURL(/esportes/);

// Procura o link de "Brasileirão" dentro da página de esportes
const brasileiraoLink = page.locator('a[href="https://www.cnnbrasil.com.br/esportes/futebol/brasileirao/"]');

// Verifica se o link de "Brasileirão" está visível na página de esportes
await expect(brasileiraoLink).toBeVisible();

// Clica na aba "Brasileirão"
 await brasileiraoLink.click();

// Verifica se a URL muda para a página de Brasileirão 
 await expect(page).toHaveURL('https://www.cnnbrasil.com.br/esportes/futebol/brasileirao/');
});