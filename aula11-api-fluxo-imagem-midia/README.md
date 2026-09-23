API de Mídia
API desenvolvida com NestJS para envio de fotos.

Tecnologias
Node.js

NestJS

TypeScript

Multer

Insomnia

Instalação
npm install

Executar o projeto
npm run start:dev

A API será executada em:

http://localhost:3000

Rotas
GET /
Verifica se a API está funcionando.

POST /media
Responsável pelo envio de fotos.

As imagens são enviadas pelo Insomnia utilizando multipart/form-data. Após o envio, os arquivos ficam armazenados na pasta uploads/.

Exemplo no Insomnia
Método: POST

Body: Multipart Form

Campo: arquivo da imagem

Selecionar a foto desejada

Enviar a requisição

Estrutura
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── media.controller.ts
└── media.module.ts

uploads/
└── imagens enviadas

Testes
npm run test

Projeto desenvolvido para praticar upload e armazenamento de imagens utilizando NestJS e Insomnia.