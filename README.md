# 🛍️ Mini Loja React – Comparando Formas de Estilização

Este repositório apresenta **quatro implementações da mesma aplicação** – uma mini loja em React – cada uma utilizando uma abordagem distinta de **estilização**.  
O objetivo é demonstrar as diferenças práticas entre as principais estratégias de CSS em projetos React.

## 📂 Estrutura do Repositório
Mini-Loja-React/

├─ 01-css-global/        
├─ 02-css-modules/      
├─ 03-tailwind/          
└─ 04-styled-components/

Cada pasta é um **projeto React independente**, com a mesma lógica de aplicação, diferindo apenas na forma de aplicar estilos.

## 🧩 Funcionalidades da Aplicação
- Lista de produtos fictícios
- Adição de itens ao carrinho
- Exibição de total de itens e valor acumulado

*(a lógica é idêntica em todas as versões, apenas o método de estilização muda)*

## 🚀 Tecnologias Comuns

## 🏁 Como Executar Cada Versão
1. Clone o repositório:
   git clone https://github.com/CristianBr1/Mini-Loja-React.git
   cd Mini-Loja-React

2. Escolha a versão desejada e entre na pasta:
   
    - cd 01-css-global
    - ou 02-css-modules
    - ou 03-tailwind
    - ou 04-styled-components

4. Instale as dependências e execute:
   - npm install
   - npm run dev


## 🖌️ Abordagens de Estilização
1️⃣ CSS Global (01-css-global)
- Usa um único arquivo global.css aplicado a toda a aplicação.
- Vantagem: simples de começar.
- Desvantagem: risco de conflitos de classes em projetos grandes.

2️⃣ CSS Modules (02-css-modules)
- Arquivos .module.css com escopo local a cada componente.
- Vantagem: evita conflitos de classes.
- Desvantagem: sintaxe um pouco mais verbosa.

3️⃣ Tailwind CSS (03-tailwind)
- Utiliza classes utilitárias pré-definidas.
- Vantagem: desenvolvimento rápido, padronização visual.
- Desvantagem: HTML mais carregado de classes.

4️⃣ Styled Components (04-styled-components)
- CSS-in-JS: estilos declarados dentro do próprio componente React.
- Vantagem: coesão de estilo e lógica, suporte a props dinâmicas.
- Desvantagem: depende de uma biblioteca extra e pode aumentar o bundle.

