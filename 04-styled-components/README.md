# 04-styled-components

Projeto React utilizando **styled-components** para estilização. Inclui Navbar fixa, dark mode persistente, grid responsivo de produtos, ProductCard acessível, skeleton loader e transições suaves.

## Estrutura

```
04-styled-components/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ ProductCard.jsx
│  │  ├─ ProductGrid.jsx
│  │  ├─ Button.jsx
│  │  └─ Skeleton.jsx
│  ├─ App.jsx
│  └─ index.jsx
└─ README.md
```

## Instalação

```bash
npm install
npm install styled-components
```

## Uso

```bash
npm run dev
```

* Toggle dark mode na Navbar (persistência via localStorage)
* Skeleton exibido durante carregamento
* Grid responsivo 1–4 colunas
* Imagens com lazy loading

## Tecnologias

* React
* styled-components
