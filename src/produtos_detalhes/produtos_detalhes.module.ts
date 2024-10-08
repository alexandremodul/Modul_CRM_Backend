import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosDetalhesService } from './produtos_detalhes.service';
import { ProdutosDetalhesController } from './produtos_detalhes.controller';
import { Produto } from './interfaces/produtos_detalhes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosDetalhesController],
  providers: [ProdutosDetalhesService],
})
export class ProdutosModuleDetalhe {}
