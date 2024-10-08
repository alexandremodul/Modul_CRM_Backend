import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoteirosService } from './roteiros.service';
import { RoteirosController } from './roteiros.controller';
import { Roteiros } from './interfaces/roteiros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roteiros])],
  controllers: [RoteirosController],
  providers: [RoteirosService],
})
export class RoteirosModule {}
