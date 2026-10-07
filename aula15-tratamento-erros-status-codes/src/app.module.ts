import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutosController } from './produtos.controller.js';
import { ProdutosServices } from './produtos.service.js';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosServices],
})
export class AppModule {}
