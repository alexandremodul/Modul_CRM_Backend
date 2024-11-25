import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosRevisaoService } from './produtos_revisao.service';
import { ProdutosRevisaoController } from './produtos_revisao.controller';
import { Produtos_revisao } from './interfaces/produtos_revisao.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 
@Module({
  imports: [    JwtModule,  
                TypeOrmModule.forFeature([Produtos_revisao]),
                forwardRef(() => AuthModule)
              ],
  controllers: [ProdutosRevisaoController],
  providers: [ProdutosRevisaoService],
})
export class ProdutosModuleRevisao {}
