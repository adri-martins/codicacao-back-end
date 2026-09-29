# AULA 12

# 📋 Sobre o projeto
A aplicação apresenta uma área considerada secreta, protegida por uma chave de API enviada através do header HTTP:
x-api-key
O servidor verifica se a chave enviada pelo cliente corresponde à chave esperada.
Quando a chave está correta, o acesso é concedido.
Quando a chave está incorreta ou não é enviada, a aplicação retorna o status:
403 Forbidden

# 🎯 Objetivo
O objetivo principal deste projeto é praticar:
* Criação de Controllers no NestJS;
* Criação de rotas HTTP;
* Utilização de headers HTTP;
* Validação de uma API Key;
* Retorno de diferentes códigos HTTP;
* Envio de respostas JSON;
* Utilização do objeto Response do Express;
* Conceitos básicos de segurança em APIs.

# 📁 Estrutura do projeto
A estrutura principal do projeto é organizada da seguinte forma:
src/
├── app.controller.ts
├── app.controller.spec.ts
├── app.service.ts
├── app.module.ts
├── main.ts
└── seguranca.controller.ts

# 🔐 Controller de Segurança
O arquivo:
src/seguranca.controller.ts
é responsável pela rota protegida da aplicação.
O controller utiliza:
@Controller('secreto')
Isso significa que a rota principal será:
/secreto
Dentro do controller foi criado o método:
@Get()
acessarAreaSecreta()
Portanto, a aplicação utiliza uma requisição:
GET /secreto

# 🔑 API Key
A chave de API é recebida através do header:
x-api-key
No NestJS, o valor é obtido através do decorator:
@Headers('x-api-key') apiKey: string
A aplicação verifica se a chave recebida corresponde à chave configurada:
SENAI-2026
A comparação é realizada através da condição:
if (apiKey === 'SENAI-2026')

# ✅ Acesso autorizado
Quando o usuário envia a API Key correta:
x-api-key: SENAI-2026
a aplicação permite o acesso ao conteúdo secreto.
Também é enviado um header de resposta:
x-auth-status: verificado
A resposta possui o status HTTP:
200 OK
E retorna um JSON semelhante a:
{
  "mensagem": "Acesso concedido ao conteudo secreto!",
  "timestamp": "2026-09-28T18:00:00.000Z"
}
O campo timestamp registra a data e hora em que a requisição foi processada.

# ❌ Acesso negado

Quando a API Key:
* não é enviada;
* está incorreta;
* ou não corresponde à chave esperada;
a aplicação retorna:
403 Forbidden
Com uma resposta JSON:
{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}

# ▶️ Executando o projeto
Para iniciar a aplicação em modo de desenvolvimento:
npm run start
Para utilizar o modo de desenvolvimento com atualização automática:
npm run start:dev
Por padrão, a aplicação estará disponível em:
http://localhost:3000

# 🧪 Testando a API
# 🔓 Teste com API Key correta
Faça uma requisição:
GET http://localhost:3000/secreto
x-api-key: SENAI-2026

# Resultado esperado
Status:
200 OK
Header de resposta:
x-auth-status: verificado
Resposta:
{
  "mensagem": "Acesso concedido ao conteudo secreto!",
  "timestamp": "2026-09-28T18:00:00.000Z"
}

# 🔒 Teste com API Key incorreta
Exemplo:
GET http://localhost:3000/secreto
x-api-key: SENAI-1234

# Resultado esperado
Status:
403 Forbidden
Resposta:
{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}

#  Conceitos utilizados
# @Controller()
Define o controller e o caminho base da rota:
@Controller('secreto')

# @Get()
Define que o método será executado através de uma requisição HTTP GET:
@Get()

# @Headers()
Permite acessar informações enviadas nos headers da requisição:
@Headers('x-api-key') apiKey: string

# @Res()
Permite utilizar diretamente o objeto Response do Express:
@Res() res: Response
Com ele é possível definir o status e retornar uma resposta JSON:
res.status(200).json(...)

# setHeader()
Define um header na resposta:
res.setHeader('x-auth-status', 'verificado');

# status()
Define o código HTTP da resposta:
res.status(200)
ou:
typescript
res.status(403)

# json()
Envia uma resposta no formato JSON:
res.json({
  mensagem: 'Acesso concedido'
});