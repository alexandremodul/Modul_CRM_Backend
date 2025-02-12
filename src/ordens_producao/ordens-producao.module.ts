import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdensProducao } from './interfaces/ordens-producao.entity';  
import { OrdensProducaoService } from './ordens-producao.service';  
import { OrdensProducaoController } from './ordens-producao.controller'; 

@Module({
  imports: [TypeOrmModule.forFeature([OrdensProducao])],  
  providers: [OrdensProducaoService], 
  controllers: [OrdensProducaoController],  
})
export class OrdensProducaoModule {}
