import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalhesOp } from './interfaces/detalhes_op.entity';
import { CreateDetalhesOpDto } from './dtos/create-detalhes_op.dto';
import { UpdateDetalhesOpDto } from './dtos/update-detalhes_op.dto';

@Injectable()
export class DetalhesOpService {
    constructor(
        @InjectRepository(DetalhesOp)
        private readonly detalhesOpRepository: Repository<DetalhesOp>,
    ) {}

    create(createDetalhesOpDto: CreateDetalhesOpDto) {
        const detalhesOp = this.detalhesOpRepository.create(createDetalhesOpDto);
        return this.detalhesOpRepository.save(detalhesOp);
    }

    findAll() {
        return this.detalhesOpRepository.find();
    }

    findOne(id: number) {
        return this.detalhesOpRepository.findOne({ where: { id } });
    }

    async update(id: number, updateDetalhesOpDto: UpdateDetalhesOpDto) {
        await this.detalhesOpRepository.update(id, updateDetalhesOpDto);
        return this.findOne(id);
    }

    remove(id: number) {
        return this.detalhesOpRepository.delete(id);
    }
}
