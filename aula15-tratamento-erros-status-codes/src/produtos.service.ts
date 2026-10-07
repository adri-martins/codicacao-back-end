import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosServices {
    produtos =[
        {id: 1, nome: 'Teclado 1', preco: 199.99},
        {id: 2, nome: 'Mouser Gamer', preco: 99.99},
        {id: 3, nome: 'Monitor 144Hz', preco: 899.989},
        {id: 4, nome: 'Headset RGB', preco: 149.99},
        {id: 5, nome: 'Cadeira Gamer', preco: 499.99},
    ];

    listaProdutos() {
        return this.produtos;
    }
}