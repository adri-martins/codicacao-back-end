import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get ()
  getPulbic(){
    return{
      message: 'Rota Publica acessada com sucesso!',
      data: new Date(),
    }

  }

  @Get('/admin')
  getAdmin(){
    return{
      message: 'Bem-vindo ao Painel administrativo!',
      data: new Date(),
    }
  }
}