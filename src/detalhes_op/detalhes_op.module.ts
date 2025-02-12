import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalhesOpService } from './detalhes_op.service';
import { DetalhesOpController } from './detalhes_op.controller';
import { DetalhesOp } from './interfaces/detalhes_op.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DetalhesOp])],
    controllers: [DetalhesOpController],
    providers: [DetalhesOpService],
})
export class DetalhesOpModule {}
