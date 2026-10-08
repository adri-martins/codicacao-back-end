import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ColaboradorController } from './colaboradores.controller.js';
import { ZodValidationPipe } from './zod-validation.pipe.js';

@Module({
  imports: [ZodValidationPipe],
  controllers: [AppController, ColaboradorController],
  providers: [AppService],
})
export class AppModule {}
