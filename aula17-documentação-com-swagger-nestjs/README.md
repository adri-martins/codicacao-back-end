# 🚀 Projeto NestJS — Back-End

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo do NestJS">
</p>

## 📌 Descrição

Este projeto utiliza o **NestJS**, um framework baseado em Node.js e TypeScript para o desenvolvimento de aplicações back-end eficientes, escaláveis e organizadas em módulos.

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- npm

## ⚙️ Instalação

Clone o repositório e acesse a pasta do projeto. Em seguida, instale as dependências:

```bash
npm install
```

## ▶️ Como executar

Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação geralmente fica disponível em:

```text
http://localhost:3000
```

## 🧪 Testes

Execute os comandos abaixo para testar a aplicação:

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📚 Documentação

- [Documentação oficial do NestJS](https://docs.nestjs.com/)
- [Repositório no GitHub](https://github.com/nestjs/nest)
- [Documentação do Node.js](https://nodejs.org/docs/)

## 📄 Licença

O NestJS utiliza a licença MIT. Consulte o [arquivo de licença](https://github.com/nestjs/nest/blob/master/LICENSE) para mais informações.

---

Desenvolvido com **NestJS e TypeScript**.
Nesta aula, foi desenvolvido um endpoint para cadastro de produtos utilizando NestJS e Swagger, permitindo documentar e testar a API por meio de uma interface gráfica.

🎯 Objetivos

Criar a rota POST /produtos.

Utilizar DTO para estruturar os dados do produto.

Documentar operações e respostas HTTP com Swagger.

Utilizar decorators como @ApiTags(), @ApiOperation(), @ApiResponse() e @ApiProperty().

🧪 Teste da API

Acesse http://localhost:3000/api, localize POST /produtos e utilize Try it out para enviar os dados do produto.

Exemplo de requisição:

{
  "nome": "Pasta de dente Sorriso",
  "preco": 5.99,
  "categoria": "higiênico"
}

✅ Conclusão

A atividade permitiu aprender a criar endpoints no NestJS, organizar dados com DTO e documentar APIs utilizando Swagger.