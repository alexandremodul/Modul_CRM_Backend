import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusRevisaoService } from './status_revisao.service';
import { StatusRevisaoController } from './status_revisao.controller';
import { Status_revisao } from './interfaces/status_revisao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Status_revisao])],
  controllers: [StatusRevisaoController],
  providers: [StatusRevisaoService],
})
export class StatusModuleRevisao {}
