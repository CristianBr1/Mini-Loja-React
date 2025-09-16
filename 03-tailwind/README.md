# 03-tailwind

Tela de produtos implementada com **Tailwind CSS**, incluindo Navbar fixa com logo, toggle de tema persistente e badge do carrinho, grid responsivo de produtos, ProductCard com imagem 1:1, título com 2 linhas, preço, rating, tag e botão “Adicionar”, hover/focus/disabled/loading com skeleton, dark mode persistente (`localStorage`) e acessibilidade.

## Estrutura

```
src/
├─ components/ (Navbar, ProductCard, ProductGrid, Button, Skeleton)
├─ App.jsx
└─ index.jsx
tailwind.config.js
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

React + Tailwind CSS (dark mode via classe) + lazy loading de imagens + transições suaves
