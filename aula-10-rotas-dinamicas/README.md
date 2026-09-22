Rotas Dinâmicas com NestJS
## Descrição
Este projeto foi desenvolvido durante os estudos de NestJS, com o objetivo de compreender o funcionamento das rotas dinâmicas em uma API.

A aplicação simula um pequeno acervo de livros armazenado em memória e permite buscar um livro específico através do seu ID.

O principal conceito estudado foi a utilização de parâmetros dinâmicos na URL, como:
GET /livros/1
Nesse exemplo, o número 1 é um parâmetro dinâmico que representa o ID do livro que será buscado.
 Objetivos do estudo
Durante o desenvolvimento foram praticados os seguintes conceitos:

Criação de Controllers no NestJS;

Criação de Services;

Injeção de dependências;

Criação de rotas HTTP com @Get();

Utilização de rotas dinâmicas com :id;

Captura de parâmetros com @Param();

Conversão de parâmetros utilizando ParseIntPipe;

Busca de dados utilizando o método .find();

Tratamento de recursos não encontrados com NotFoundException;

Organização básica de uma aplicação NestJS.

## Rota dinâmica
A rota principal desenvolvida no projeto é:

GET /livros/:id

O :id representa um valor que pode mudar de acordo com o livro que queremos consultar.

Por exemplo:

GET /livros/1
GET /livros/2
GET /livros/3
GET /livros/4

Todas essas requisições utilizam a mesma rota:

@Get(':id')

O valor informado na URL é recebido através do @Param().

## Utilizando ParseIntPipe
Os parâmetros recebidos pela URL são inicialmente tratados como string.

Por isso, foi utilizado o ParseIntPipe:

@Get(':id')
buscarPorId(@Param('id', ParseIntPipe) id: string) {
  const numeroId = +id;

  return this.livroService.encontrarPorId(numeroId);
}

O ParseIntPipe é utilizado para garantir que o parâmetro recebido seja convertido para um número inteiro.

Assim, quando acessamos:

GET /livros/2

o valor do ID pode ser utilizado para realizar a busca pelo livro correspondente.

## Dados dos livros
Os livros utilizados no estudo foram armazenados diretamente no Service, em um array:

private livros = [
  {
    id: 1,
    titulo: 'O senhor dos Anéis',
    autor: 'J.R.R Tolkien',
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
  },
  {
    id: 3,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
  },
  {
    id: 4,
    titulo: 'O Alienista',
    autor: 'Machado de Assis',
  },
];

Neste momento, os dados não estão armazenados em um banco de dados. Eles ficam apenas em memória enquanto a aplicação está sendo executada.

## Busca pelo ID
A busca do livro é realizada no LivrosService através do método:

encontrarPorId(id: number) {
  const livro = this.livros.find((livro) => livro.id === id);

  if (!livro) {
    throw new NotFoundException(
      `Livro com ID ${id} não localizado em nosso acervo`,
    );
  }

  return livro;
}

O método .find() percorre o array de livros procurando um objeto cujo id seja igual ao ID recebido.

Por exemplo:

GET /livros/3

A aplicação procura:

id === 3

e retorna:

{
  "id": 3,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis"
}

## Tratamento de erro
Também foi estudado o tratamento de situações em que o livro não existe.

Caso seja feita uma requisição para:

GET /livros/10

e não exista nenhum livro com esse ID, o Service lança uma exceção:

throw new NotFoundException(
  `Livro com ID ${id} não localizado em nosso acervo`,
);

Isso faz com que a API informe que o recurso solicitado não foi encontrado.

## Estrutura do projeto
A estrutura principal utilizada durante o estudo foi:

aula-10-rotas-dinamicas/
│
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── livros.controller.ts
│   ├── livros.service.ts
│   └── main.ts
│
├── test/
├── package.json
└── README.md

livros.controller.ts
Responsável por receber as requisições HTTP e definir as rotas.

@Controller('livros')
export class LivrosController {
  constructor(private readonly livroService: LivrosService) {}

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: string) {
    const numeroId = +id;

    return this.livroService.encontrarPorId(numeroId);
  }
}

livros.service.ts
Responsável pela lógica de busca dos livros.

@Injectable()
export class LivrosService {
  // dados dos livros

  encontrarPorId(id: number) {
    const livro = this.livros.find((livro) => livro.id === id);

    if (!livro) {
      throw new NotFoundException(
        `Livro com ID ${id} não localizado em nosso acervo`,
      );
    }

    return livro;
  }
}

🚀 Como executar o projeto
Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run start:dev

Depois, acesse a API através de:

http://localhost:3000

Para consultar um livro específico:

http://localhost:3000/livros/1

🧪 Exemplos de requisições
Buscar o livro 1
GET /livros/1

Resposta:

{
  "id": 1,
  "titulo": "O senhor dos Anéis",
  "autor": "J.R.R Tolkien"
}

Buscar o livro 2
GET /livros/2

Resposta:

{
  "id": 2,
  "titulo": "1984",
  "autor": "George Orwell"
}

Buscar um livro inexistente
GET /livros/10

Nesse caso, a aplicação retorna um erro informando que o livro não foi encontrado.

💡 O que são rotas dinâmicas?
Rotas dinâmicas são rotas que possuem uma parte variável na URL.

No projeto:

@Get(':id')

O :id é a parte dinâmica.
Isso permite que uma única rota seja utilizada para diferentes livros:
/livros/1
/livros/2
/livros/3
/livros/4
Em vez de criar uma rota diferente para cada livro, criamos apenas:
/livros/:id
e o valor do id determina qual livro será consultado.
