import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CriarProdutoDTO } from "./dto/criar-produtos.dto.js";

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
    @Post()
    @ApiOperation({
        summary:'Cadastra um novo produto no catálago'
    })
    @ApiResponse({
        status:201, description:'Produto cadastrado com sucesso'
    })
    @ApiResponse({
        status:400, description:'Playload enviado com dados inválidos'
    })
    async criar(@Body() criarProdutoDTO: CriarProdutoDTO){
        return{
            id: 150,
            ...CriarProdutoDTO,
            criadoEm: new Date().toLocaleDateString(),
        };
    }

}