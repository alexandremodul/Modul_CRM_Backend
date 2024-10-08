import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosRevisaoService } from './produtos_revisao.service';
import { ProdutosRevisaoController } from './produtos_revisao.controller';
import { Produtos_revisao } from './interfaces/produtos_revisao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos_revisao])],
  controllers: [ProdutosRevisaoController],
  providers: [ProdutosRevisaoService],
})
export class ProdutosModuleRevisao {}
