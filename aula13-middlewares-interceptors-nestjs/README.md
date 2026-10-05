Aula 13 — Middlewares e Interceptors no NestJS
Projeto desenvolvido durante a Aula 13, com foco no funcionamento de Middlewares no NestJS, utilizando um middleware personalizado para interceptar requisições HTTP, registrar informações no console e controlar o acesso a uma rota administrativa.

 Conteúdo da aula
Nesta aula foram trabalhados os seguintes conceitos:

Middlewares no NestJS

Interface NestMiddleware

Interceptação de requisições HTTP

Uso de Request, Response e NextFunction

Leitura de headers HTTP

Controle de acesso através de middleware

Registro de informações das requisições

Aplicação de middleware em rotas específicas

Diferença conceitual entre Middleware e Interceptor

Tecnologias utilizadas
Node.js

TypeScript

NestJS

Express

Estrutura do projeto
A estrutura principal utilizada na aula é semelhante a:

aula13-middlewares-interceptors-nestjs/
├── src/
│   ├── logger/
│   │   ├── logger.middleware.spec.ts
│   │   └── logger.middleware.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md

 O que é um Middleware?
Middleware é uma função executada durante o processamento de uma requisição HTTP.

Ele pode ser utilizado para:

Registrar requisições;

Validar informações;

Verificar autenticação;

Verificar autorização;

Alterar objetos request e response;

Executar alguma lógica antes de chegar ao controller;

Encerrar uma requisição antes que ela chegue ao controller.
Testando a aplicação
1. Instalação
Instale as dependências:

npm install

2. Executando em modo desenvolvimento
npm run start:dev

A aplicação ficará disponível, normalmente, em:

http://localhost:3000

 Testando a rota pública
Faça uma requisição:

GET http://localhost:3000/

Resposta esperada:

{
  "message": "Rota Publica acessada com sucesso!",
  "data": "2026-..."
}

No terminal da aplicação também será registrado algo semelhante a:

[LOG] Método: GET | Rota: /

 Testando a rota administrativa sem permissão
Faça uma requisição para:
GET http://localhost:3000/admin
Sem enviar o header x-user-role, o middleware bloqueará o acesso.
Resposta:
{
  "statusCode": 403,
  "message": "Acesso Negado: Privilégio de Supervisor Necessário!",
  "log": "2026-..."
}

✅ Testando a rota administrativa com permissão
Agora envie o header:
x-user-role: supervisor
Exemplo utilizando curl:
curl -H "x-user-role: supervisor" http://localhost:3000/admin
A requisição poderá chegar ao controller.
Resposta esperada:
{
  "message": "Bem-vindo ao Painel administrativo!",

  "data": "2026-..."

  🔑 Rota secreta

Também foi criada uma rota chamada `/secret`, responsável por apresentar uma mensagem de boas-vindas ao usuário.

# 🔐 Rota secreta
@Get('secret')
getSecret() {
  return {
    mensagem: 'Bem-vindo a rota secreta!',
    date: new Date(),
  };
}
# 📩 Resposta da rota
{
  "mensagem": "Bem-vindo a rota secreta!",
  "date": "2026-09-29T..."
}

# 🧪 Como testar

Faça uma requisição:
`GET http://localhost:3000/secret`

Resultado esperado:
200 OK
{
  "mensagem": "Bem-vindo a rota secreta!",
  "date": "..."
}
}

