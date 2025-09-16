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

  async create(dto: CreateDetalhesOpDto) {
    const existing = await this.detalhesOpRepository.findOne({
      where: { ordem_prod: dto.ordem_prod, desc_oper: dto.desc_oper },
    });
    if (existing) {
      if (dto.dt_planejada !== undefined) existing.dt_planejada = dto.dt_planejada;
      if (dto.status !== undefined) existing.status = dto.status;
      return this.detalhesOpRepository.save(existing);
    }
    const novo = this.detalhesOpRepository.create(dto);
    return this.detalhesOpRepository.save(novo);
  }

  findAll() {
    return this.detalhesOpRepository.find();
  }

  find(ordem_prod: string) {
    return this.detalhesOpRepository.find({ where: { ordem_prod } });
  }

  async update(ordem_prod: string, dto: UpdateDetalhesOpDto) {
    await this.detalhesOpRepository.update({ ordem_prod }, dto);
    return this.find(ordem_prod);
  }

  async patch(ordem_prod: string, desc_oper: string, dto: UpdateDetalhesOpDto) {
    let detalhe = await this.detalhesOpRepository.findOne({ where: { ordem_prod, desc_oper } });
    if (!detalhe) {
      detalhe = this.detalhesOpRepository.create({
        ordem_prod,
        desc_oper,
        dt_planejada: dto.dt_planejada ?? null,
        status: dto.status ?? null,
      });
      return this.detalhesOpRepository.save(detalhe);
    }
    if (dto.dt_planejada !== undefined) detalhe.dt_planejada = dto.dt_planejada;
    if (dto.status !== undefined) detalhe.status = dto.status;
    return this.detalhesOpRepository.save(detalhe);
  }

  remove(id: number) {
    return this.detalhesOpRepository.delete(id);
  }
}
