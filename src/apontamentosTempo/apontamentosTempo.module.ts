import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApontamentosTempoService } from './apontamentosTempo.service';
import { ApontamentosTempoController } from './apontamentosTempo.controller';
import { ApontamentosTempo } from './interface/apontamentosTempo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApontamentosTempo])],
  controllers: [ApontamentosTempoController],
  providers: [ApontamentosTempoService],
})
export class ApontamentosTempoModule {}
