# 02-css-modules

Tela de produtos implementada com **CSS Modules**, incluindo Navbar fixa com logo, toggle de tema persistente e badge do carrinho, grid responsivo de produtos, ProductCard com imagem 1:1, título com 2 linhas, preço, rating, tag e botão “Adicionar”, hover/focus/disabled/loading com skeleton, dark mode persistente (`localStorage`) e acessibilidade.

## Estrutura

```
src/
├─ components/ (Navbar.jsx + Navbar.module.css, ProductCard.jsx + ProductCard.module.css, ProductGrid.jsx + ProductGrid.module.css, Button.jsx + Button.module.css, Skeleton.jsx + Skeleton.module.css)
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
* Dark mode muda cores via variáveis CSS globais

## Tecnologias

React + CSS Modules + variáveis CSS globais + dark mode via classe `.dark` no `<html>` + lazy loading de imagens + transições suaves
