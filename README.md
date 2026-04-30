# Criptomoedas — Projeto Pessoal

Este é um projeto desenvolvido durante o curso de React, onde criei uma pequena aplicação para visualizar informações sobre criptomoedas. O objetivo principal foi praticar conceitos de React, TypeScript e Vite, além de aprender sobre requisições a APIs externas e organização de componentes.

## Resumo do Projeto

A aplicação permite navegar por uma lista de criptomoedas, ver detalhes de uma moeda específica e navegar entre páginas usando rotas. Usei componentes funcionais, CSS modular para estilos locais e organizei a estrutura do projeto para manter o código legível e escalável.

## Funcionalidades

- Lista de criptomoedas com informações básicas (nome, preço, variação)
- Página de detalhes com informações mais completas da criptomoeda
- Navegação entre páginas usando rotas
- Estilização com módulos CSS

## Tecnologias

- React
- TypeScript
- Vite
- CSS Modules

## Estrutura do projeto (resumida)

- `src/` — código fonte
  - `components/` — componentes reutilizáveis (ex.: header)
  - `pages/` — páginas da aplicação (`home`, `detail`, `notfound`)
  - `router.tsx` — configuração de rotas
  - `main.tsx` / `App.tsx` — bootstrap da aplicação

## Como rodar localmente

1. Instale as dependências:

```
npm install
```

2. Rode em modo de desenvolvimento:

```
npm run dev
```

3. Abra `http://localhost:5173` no navegador (porta padrão do Vite).

## O que aprendi

- Conceitos de React com TypeScript: tipagem de props, uso de hooks e boas práticas em componentes funcionais.
- Integração com APIs: fazer requisições, tratar respostas assíncronas e exibir dados dinamicamente.
- Organização de projeto: separação entre componentes e páginas, e uso de módulos CSS para escopo de estilos.
- Ferramentas modernas: configurar e usar o Vite para desenvolvimento rápido.
