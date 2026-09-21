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


## 
##  Testes da API com Insomnia

Para testar os endpoints da API de convidados, foi utilizado o Insomnia, uma ferramenta para realizar requisições HTTP e verificar as respostas da aplicação.

A API foi executada localmente na porta `3000`:

```text
http://localhost:3000

Teste GET — Listar convidados

Foi realizada uma requisição GET para:
GET http://localhost:3000/convidados
O teste retornou o status:
200 OK

Teste POST — Criar convidado
Foi realizado um teste utilizando o método POST:
POST http://localhost:3000/convidados/3
O resultado foi:
404 Not Found
Teste PATCH — Atualizar convidado
Foi realizado  teste utilizando o método PATCH:
PATCH http://localhost:3000/convidados/10
Com o seguinte corpo JSON:
{
  "idade": 200
}
O resultado foi:
404 Not Found
A API retornou:
{
  "message": "Convidado com ID 10 não encontrado!",
  "error": "Not Found",
  "statusCode": 404
}
Esse teste demonstra o tratamento de erro da API quando é realizada uma tentativa de atualização de um convidado que não existe.

Teste DELETE — Remover convidado
Foi realizada uma requisição DELETE:
DELETE http://localhost:3000/convidados/10
A resposta retornou:
204 No Content
O status 204 indica que a requisição foi processada com sucesso e que não há conteúdo para retornar no corpo da resposta.

| Método | Endpoint         | Resultado                          | Status           |
| ------ | ---------------- | ---------------------------------- | ---------------- |
| GET    | `/convidados`    | Lista de convidados retornada      | `200 OK`         |
| POST   | `/convidados/3`  | Rota não encontrada                | `404 Not Found`  |
| PATCH  | `/convidados/10` | Convidado não encontrado           | `404 Not Found`  |
| DELETE | `/convidados/10` | Requisição processada sem conteúdo | `204 No Content` |
