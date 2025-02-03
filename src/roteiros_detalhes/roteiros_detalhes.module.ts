import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoteiroDetalhesService } from './roteiros_detalhes.service';
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
  providers: [RoteiroDetalhesService],
})
export class RoteirosDetalhesModule {}
