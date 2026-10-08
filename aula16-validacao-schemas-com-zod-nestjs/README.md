#  Aula 16 — Validação de dados com NestJS e Zod

##  Sobre a aula

Nesta aula, estudamos como realizar **validação de dados em uma aplicação NestJS utilizando Zod**.

Criamos uma rota para cadastro de colaboradores e definimos regras para garantir que os dados enviados estejam corretos antes de serem processados pela aplicação.

Os principais assuntos estudados foram:

- NestJS
- Controllers
- Rotas HTTP
- `POST`
- `@Body()`
- Pipes
- Pipes personalizados
- Zod
- Schemas de validação
- Tipagem com TypeScript
- `z.infer()`
- Mensagens de erro personalizadas
- `z.enum()`
- Validação de strings, números e e-mails

---
## Objetivo

Criar um endpoint para cadastrar colaboradores e validar os dados recebidos utilizando **Zod**.

O colaborador possui os seguintes campos:

| Campo | Tipo | Regra |
|---|---|---|
| `nome` | `string` | Mínimo de 3 caracteres |
| `email` | `string` | Deve ser um e-mail válido |
| `idade` | `number` | Entre 18 e 65 anos |
| `departamento` | `string` | `TI`, `RH` ou `Financeiro` |

---

#  Estrutura do projeto

```text
src/
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── colaborador.schema.ts
├── colaboradores.controller.ts
├── main.ts
└── zod-validation.pipe.ts