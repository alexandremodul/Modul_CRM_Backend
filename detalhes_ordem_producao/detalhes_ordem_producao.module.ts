import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalhesOrdemProducaoController } from './detalhes_ordem_producao.controller';
import { DetalhesOrdemProducaoService } from './detalhes_ordem_producao.service';
import { DetalhesOrdemProducao } from './interfaces/detalhes_ordem_producao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalhesOrdemProducao])],
  controllers: [DetalhesOrdemProducaoController],
  providers: [DetalhesOrdemProducaoService],
})
export class DetalhesOrdemProducaoModule {}
