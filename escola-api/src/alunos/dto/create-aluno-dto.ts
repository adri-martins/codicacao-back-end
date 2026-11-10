import { IsString, IsInt, IsNotEmpty, IsArray, Min, ArrayMinSize  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlunoDto {
  @ApiProperty({
    
    description: 'Nome completo do aluno',
    example: 'João da Silva',
  })
  @IsString()
  @IsNotEmpty({
     message: 'O nome é obrigatório e não pode ser vazio.' })
  nome: string;

  @ApiProperty({
    description: 'Idade do aluno',
    example: 25,
  })
  @IsInt({
    message: 'A idade deve ser um número inteiro.' 
  })
  @Min(0, {
    message: 'A idade não pode ser negativa.'

  })
    idade: number;

    @ApiProperty({
    description: 'Matrícula do aluno',
    example: '1234',
    })
  @IsString()

  @IsNotEmpty({
    message: 'A matrícula é obrigatória e não pode ser vazia.' 
  })
  matricula: string;

  @ApiProperty({
    description: 'Cursos em que o aluno está matriculado',
    example: ['Ciência da Computação', 'Recursos Humanos'],
  })
  
  @IsArray()
  @IsString({
    each: true,
    message: 'Cada curso deve ser uma texto.' 
  })
  @ArrayMinSize(1, {
    message: 'Deve haver pelo menos um curso.'
  })
  cursos: string[];


}