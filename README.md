# 🐾 Pokédex TypeScript Lite

> 🚧 **Status do Projeto:** Em Desenvolvimento...

---

## 📝 Sobre o projeto

O **Pokédex TypeScript Lite** é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

Este mini projeto está sendo desenvolvido como parte avaliativa do curso de **Desenvolvimento Back-end Node.js** do **SENAI**, através do programa **SC Tec** (Módulo 01 - Semana 08).

---

## 🎯 Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js
- JavaScript no back-end
- TypeScript
- Interfaces
- Funções tipadas
- Arrays
- Objetos
- JSON
- Métodos de array
- Classes
- async/await
- fetch
- Tratamento de erros
- GitHub
- GitFlow
- Kanban

---

## 🛠️ Tecnologias utilizadas

- **Runtime:** Node.js
- **Linguagem:** TypeScript (via TS-Node)
- **API Externa:** PokeAPI
- **Controle de Versão:** Git & GitHub
- **Gerenciamento:** Trello (Kanban)

---

## 📂 Estrutura do Projeto

A árvore estrutural do projeto adota a separação rígida de responsabilidades em camadas:

```text
└── Pokedex-Typescript-Lite/    # Pasta raíz do Projeto
    │
    ├── src/                    # Código-fonte principal da aplicação
    │   │
    │   ├── controllers/        # Camada de controle e manipulação das requisições
    │   ├── models/             # Definição de estruturas de dados e interfaces
    │   ├── services/           # Regras de negócio e integração com a PokeAPI
    │   ├── utils/              # Definição de formatações de texto
    │   ├── pc_box.json         # Armazenamento local utilizando arquivo JSON para representar Banco de Dados
    │   └── main.ts             # Ponto de entrada centralizado da aplicação
    │
    ├── package.json            # Manifesto de configuração, scripts e dependências
    ├── tsconfig.json           # Manual de regras rígidas do compilador TypeScript (Strict Mode)
    └── README.md               # Documentação do projeto
```

## 🌟 Funcionalidades (Escopo)

- [ ] Buscar Pokémon por nome ou ID na PokeAPI
- [ ] Tratar erros de requisições para Pokémon inexistentes (Status 404)
- [ ] Transformar resposta da API em objeto simplificado
- [ ] Adicionar Pokémon a um catálogo local em memória
- [ ] Impedir Pokémon duplicado
- [ ] Listar catálogo com todos os Pokémon atualmente salvos
- [ ] Remover Pokémon do catálogo local através do identificador (ID)
- [ ] Exibir mensagens no terminal
- [ ] Exibir exemplos de execução
- [ ] Buscas válidas

---

## 🗺️ Organização com Kanban

O planejamento das etapas de desenvolvimento foi gerenciado de forma visual através de um quadro Kanban, utilizando a ferramenta Trello.

* **Link do Quadro:** [Clique aqui para acessar o Kanban](https://trello.com/b/sqfExJnR)

---

## 🌿 Branches Utilizadas

Seguindo o fluxo do GitFlow simplificado exigido no projeto, as ramificações foram separadas em:

- `main`: Branch principal de produção para entrega final.
- `develop`: Branch secundária para integração do código.
- `feature/nome-da-feature-temporária`: Branchs temporárias isoladas para codificação das funcionalidades.
- `docs/readme`: Branch temporária isolada para evolução da documentação técnica.

---

### Criado por Bruna Fraga 👩‍💻