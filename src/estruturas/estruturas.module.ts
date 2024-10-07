import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstruturasService } from './estruturas.service';
import { EstruturasController } from './estruturas.controller';
import { Estruturas } from './interfaces/estruturas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estruturas])],
  controllers: [EstruturasController],
  providers: [EstruturasService],
})
export class EstruturasModule {}
