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

    async create(createDetalhesOpDto: CreateDetalhesOpDto) {
        const existingDetalhesOp = await this.detalhesOpRepository.findOne({
            where: {
                ordem_prod: createDetalhesOpDto.ordem_prod,
                desc_oper: createDetalhesOpDto.desc_oper,
            },
        });

        if (existingDetalhesOp && existingDetalhesOp.dt_planejada !== createDetalhesOpDto.dt_planejada) {
            existingDetalhesOp.dt_planejada = createDetalhesOpDto.dt_planejada;
            return this.detalhesOpRepository.save(existingDetalhesOp);
        }

        const detalhesOp = this.detalhesOpRepository.create(createDetalhesOpDto);
        return this.detalhesOpRepository.save(detalhesOp);
    }

    findAll() {
        return this.detalhesOpRepository.find();
    }

    find(ordem_prod: string) {
        return this.detalhesOpRepository.find({ where: { ordem_prod } });
    }

    async update(ordem_prod: string, updateDetalhesOpDto: UpdateDetalhesOpDto) {
        await this.detalhesOpRepository.update(ordem_prod, updateDetalhesOpDto);
        return this.find(ordem_prod);
    }                                                                                                                 
    async updateData(ordem_prod: string, desc_oper: string, dt_planejada: string) {
            const detalhe = await this.detalhesOpRepository.findOne({
                where: { ordem_prod, desc_oper },
            });

            if (!detalhe) {
                throw new Error(`Detalhe com ordem_prod ${ordem_prod} e desc_oper ${desc_oper} não encontrado`);
            }

            detalhe.dt_planejada = dt_planejada;
            return this.detalhesOpRepository.save(detalhe);
        }
    remove(id: number) {
        return this.detalhesOpRepository.delete(id);
    }
}
