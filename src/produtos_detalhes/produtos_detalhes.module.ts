import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosDetalhesService } from './produtos_detalhes.service';
import { ProdutosDetalhesController } from './produtos_detalhes.controller';
import { Produto } from './interfaces/produtos_detalhes.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([Produto]), forwardRef(()=> AuthModule)],
  controllers: [ProdutosDetalhesController],
  providers: [ProdutosDetalhesService],
})
export class ProdutosModuleDetalhe {}
