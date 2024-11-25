import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './interfaces/produto.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([Produto]), forwardRef(() => AuthModule)],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
