import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './create-aluno-dto.js';
import { UpdateAlunoDto } from './update-aluno.dto.js';
import { ApiTags, ApiResponse, ApiOperation} from '@nestjs/swagger';

@ApiTags('Alunos')
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService: AlunosService) {}
    @Post()
    @ApiOperation({ summary: 'Cria a matrícula do aluno'
     })
     @ApiResponse({
        status: 201,
        description: ' A matrícula do aluno foi criada com sucesso.',
      })
      @ApiResponse({
        status: 400,
        description: 'Dados inválidos. Verifique os campos obrigatórios e o formato dos dados.',
      })
      @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor, matrícula do aluno não pôde ser criada.',
      })
      

    create(@Body() createAlunoDto: CreateAlunoDto) {
        return this.alunoService.create(createAlunoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retorna a lista de alunos cadastrados' })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Nenhum aluno encontrado.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao buscar a lista de alunos.',
    })
    findAll() {
        return this.alunoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retorna os detalhes de um aluno específico' })
    @ApiResponse({
        status: 200,
        description: 'Detalhes do aluno retornados com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao buscar os detalhes do aluno.',
    })

    findOne(@Param('id') id: string) {
        return this.alunoService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualiza os dados de um aluno específico' })
    @ApiResponse({
        status: 200,
        description: 'Dados do aluno atualizados com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao atualizar os dados do aluno.',
    })
    update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
        return this.alunoService.update(id, updateAlunoDto);
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Remove um aluno específico' })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao remover o aluno.',
    })
    remove(@Param('id') id: string) {
        return this.alunoService.remove(id);
    }
}
