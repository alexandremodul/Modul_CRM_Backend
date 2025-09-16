import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApontamentosService } from './apontamentos.service';
import { ApontamentosController } from './apontamentos.controller';
import { Apontamentos } from './interface/apontamentos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apontamentos])],
  controllers: [ApontamentosController],
  providers: [ApontamentosService],
})
export class ApontamentosModule {}
