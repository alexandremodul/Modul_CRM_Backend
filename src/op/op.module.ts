import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Op } from './interfaces/op.entity';  
import { OpService } from './op.service'; 
import { OpController } from './op.controller';  

@Module({
  imports: [TypeOrmModule.forFeature([Op])],  
  providers: [OpService], 
  controllers: [OpController],  
})
export class OpModule {}
