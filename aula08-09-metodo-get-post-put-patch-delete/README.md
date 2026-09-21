#  Projeto NestJS (aula 08)

##  Sobre o projeto

Este projeto foi desenvolvido utilizando **NestJS**, um framework progressivo para **Node.js** e **TypeScript**, voltado para a construção de aplicações **server-side eficientes, escaláveis e organizadas**.

O objetivo é utilizar os principais recursos oferecidos pelo NestJS, aplicando uma estrutura adequada para o desenvolvimento de aplicações backend.

---

##  Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* npm

---

##  Estrutura do projeto

```text
projeto/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

### Principais arquivos

* `main.ts` — ponto de entrada da aplicação.
* `app.module.ts` — módulo principal da aplicação.
* `app.controller.ts` — responsável pelas rotas e requisições.
* `app.service.ts` — contém a lógica de serviço da aplicação.
* `package.json` — gerenciamento das dependências e scripts do projeto.

---

##  Instalação

Primeiro, instale as dep




aula 09
# API de Convidados

API desenvolvida com **NestJS** para praticar a criação de rotas, serviços, DTOs e operações CRUD básicas com uma lista de convidados.

## Funcionalidades
* Listar todos os convidados
* Criar um novo convidado
* Atualizar a idade de um convidado
* Remover um convidado
* Tratamento de erro para IDs inexistentes

##  Estrutura

```text
src/
├── convidados/
│   ├── dto/
│   │   └── criar-convidado.dto.ts
│   ├── convidados.controller.ts
│   └── convidados.service.ts
└── app.module.ts
```

## Tecnologias

* Node.js
* NestJS
* TypeScript

##  Rotas

| Método  | Rota          | Descrição           |
| ------- | ------------- | ------------------- |
| `GET`   | `/convidados` | Lista os convidados |
| `POST`  | `/convidados` | Cria um convidado   |
| `PATCH` |               |                     |
