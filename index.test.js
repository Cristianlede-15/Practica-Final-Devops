const fs = require('fs');
const { JSDOM } = require('jsdom');

test('La página contiene el título correcto', () => {
  const html = fs.readFileSync('index.html', 'utf-8');
  const dom = new JSDOM(html);
  expect(dom.window.document.querySelector('h1').textContent).toBe('Juego de Adivinar Pares');
});

test('La página contiene un botón para reiniciar el juego', () => {
  const html = fs.readFileSync('index.html', 'utf-8');
  const dom = new JSDOM(html);
  const button = dom.window.document.querySelector('button#restart');
  expect(button).not.toBeNull();
  expect(button.textContent).toBe('Reiniciar Juego');
});