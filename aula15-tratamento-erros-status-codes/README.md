🛒 API de Produtos — NestJS - AUla15

API REST desenvolvida utilizando NestJS e TypeScript, criada para praticar conceitos fundamentais do desenvolvimento de APIs com Node.js.

O projeto possui um endpoint de status da aplicação e uma API de produtos, permitindo listar produtos e buscar um produto específico pelo seu ID.

 Tecnologias utilizadas
Node.js — ambiente de execução JavaScript
NestJS — framework para construção de aplicações server-side
TypeScript — tipagem estática para JavaScript
npm — gerenciamento de dependências
Estrutura do projeto
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── produtos.controller.ts
└── produtos.service.ts
Principais arquivos

app.module.ts

É o módulo principal da aplicação. Nele são registrados os controllers e services utilizados pelo projeto.

app.controller.ts

Responsável pelo endpoint de status da aplicação.

app.service.ts

Contém a lógica responsável por retornar a mensagem de status.

produtos.controller.ts

Responsável pelas rotas relacionadas aos produtos e pelo tratamento dos parâmetros recebidos.

produtos.service.ts

Contém a lista de produtos e a lógica para disponibilizá-los ao controller.

 Instalação

Clone o projeto e instale as dependências:

npm install
▶ Executando a aplicação
Desenvolvimento
npm run start
Modo watch

Reinicia automaticamente a aplicação quando os arquivos são alterados:

npm run start:dev
Produção
npm run start:prod
🔗 Endpoints
 Status da aplicação
GET /status

Utilizado para verificar se o servidor está funcionando corretamente.

Resposta
Status: Servidor Ativo!
📋 Listar produtos
GET /produtos

Retorna todos os produtos cadastrados na aplicação.

Exemplo de resposta
[
  {
    "id": 1,
    "nome": "Teclado 1",
    "preco": 199.99
  },
  {
    "id": 2,
    "nome": "Mouser Gamer",
    "preco": 99.99
  },
  {
    "id": 3,
    "nome": "Monitor 144Hz",
    "preco": 899.989
  },
  {
    "id": 4,
    "nome": "Headset RGB",
    "preco": 149.99
  },
  {
    "id": 5,
    "nome": "Cadeira Gamer",
    "preco": 499.99
  }
]
🔎 Buscar produto por ID
GET /produtos/:id

Permite consultar um produto específico através do seu ID.

Exemplo
GET /produtos/1
Resposta
{
  "id": 1,
  "nome": "Teclado 1",
  "preco": 199.99
}
⚠️ Tratamento de erros

A API possui tratamento para diferentes situações.

ID inválido

Caso seja informado um ID que não seja numérico:

GET /produtos/abc

A API retorna:

{
  "statusCode": 400,
  "message": "ID inválido. Deve ser um número inteiro!",
  "error": "Bad Request"
}
Produto não encontrado

Caso o ID seja numérico, mas não exista na lista:

GET /produtos/999

A API retorna:

{
  "statusCode": 404,
  "message": "Produto com ID 999 não encontrado.",
  "error": "Not Found"
}

Além disso, a aplicação utiliza o Logger do NestJS para registrar tentativas de busca com IDs inválidos ou produtos inexistentes.

🧪 Testes

Para executar os testes unitários:

npm run test

Para executar os testes end-to-end:

npm run test:e2e

Para gerar o relatório de cobertura:

npm run test:cov
💾 Armazenamento dos produtos

Atualmente, os produtos são armazenados diretamente em um array dentro do ProdutosServices.

Isso significa que o projeto não utiliza banco de dados neste momento.

Os dados são mantidos apenas enquanto a aplicação está em execução. Caso o servidor seja reiniciado, a lista retorna aos valores definidos no código.

Uma evolução futura seria integrar um banco de dados como:

PostgreSQL
MySQL
MongoDB
🏗️ Conceitos praticados

Este projeto demonstra conceitos importantes do NestJS, como:

Controllers
Services
Modules
Injeção de dependência
Rotas HTTP
Parâmetros de rota (@Param)
Decorators
Tratamento de exceções
BadRequestException
NotFoundException
Logging com Logger
Organização de uma API REST
TypeScript
📌 Possíveis melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

Criar novos produtos

Atualizar produtos

Excluir produtos

Conectar a um banco de dados

Criar DTOs

Utilizar validação com class-validator

Implementar autenticação

Adicionar documentação com Swagger

Criar testes para os endpoints

Implementar paginação e filtros

📄 Licença
Este projeto está sob a licença MIT.