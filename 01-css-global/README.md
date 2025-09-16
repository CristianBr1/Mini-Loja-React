# 01-css-global

Tela de produtos implementada com **CSS Global**, incluindo Navbar fixa com logo, toggle de tema persistente e badge do carrinho, grid responsivo de produtos, ProductCard com imagem 1:1, título com 2 linhas, preço, rating, tag e botão “Adicionar”, hover/focus/disabled/loading com skeleton, dark mode persistente e acessibilidade.

## Estrutura

```
src/
├─ components/ (Navbar, ProductCard, ProductGrid, Button, Skeleton)
├─ styles/ (global.css, variables.css)
├─ App.jsx
└─ index.jsx
package.json
```

## Uso

```bash
npm install
npm run dev
```

* Toggle dark mode: botão 🌙 / ☀️ na Navbar
* Skeleton exibido durante carregamento dos produtos
* Grid responsivo 1–4 colunas

## Tecnologias

React + CSS Global + dark mode via classe `.dark` + variáveis CSS + transições suaves
