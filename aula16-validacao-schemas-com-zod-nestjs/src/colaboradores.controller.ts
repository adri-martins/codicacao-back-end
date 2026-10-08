import { Controller, Post,  Body, UsePipes } from "@nestjs/common";
import { colaboradorSchema} from "./colaborador.schema.js";
import type { Colaborador } from "./colaborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";

@Controller('colaboradores')
export class ColaboradorController{
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async creat(@Body() body: Colaborador){
        return{
            message: 'colaborador criado com sucesso!',
            colaborador: body,
        };
    }
}