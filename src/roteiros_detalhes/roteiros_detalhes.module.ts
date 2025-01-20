import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoteiroDetalhesSerivce } from './roteiros_detalhes.service';
import { RoteirosDetalhesController } from './roteiros_detalhes.controller';
import { Roteiros_detalhes } from './interfaces/roteiros_detalhes.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 
@Module({
  imports: [    JwtModule,  
                TypeOrmModule.forFeature([Roteiros_detalhes]),
                forwardRef(() => AuthModule)
              ],
  controllers: [RoteirosDetalhesController],
  providers: [RoteiroDetalhesSerivce],
})
export class RoteirosDetalhesModule {}
