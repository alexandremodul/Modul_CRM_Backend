import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { DetalhesOrdemProducao } from './interfaces/detalhes_ordem_producao.entity';
import { CreateDetalhesOrdemProducaoDto } from './dtos/create-detalhes-ordem-producao.dto';
import { UpdateDetalhesOrdemProducaoDto } from './dtos/update-detalhes-ordem-producao.dto';

@Injectable()
export class DetalhesOrdemProducaoService {
  constructor(
    @InjectRepository(DetalhesOrdemProducao)
    private readonly repo: Repository<DetalhesOrdemProducao>,
  ) {}

  async create(dto: CreateDetalhesOrdemProducaoDto): Promise<DetalhesOrdemProducao> {
    const payload: DeepPartial<DetalhesOrdemProducao> = {
      op: dto.op,
      dt_pl_inicio: dto.dt_pl_inicio,
      dt_pl_fim: dto.dt_pl_fim,
      status: dto.status,
    };
    const entity = this.repo.create(payload);
    return this.repo.save(entity);
  }

  findAll(): Promise<DetalhesOrdemProducao[]> {
    return this.repo.find();
  }

  findAllByOp(op: string): Promise<DetalhesOrdemProducao[]> {
    return this.repo.find({ where: { op } });
  }

  async findOne(id: number): Promise<DetalhesOrdemProducao> {
    const row = await this.repo.findOne({ where: { id } });
    if (!row) throw new NotFoundException(`DetalhesOrdemProducao id=${id} não encontrado`);
    return row;
  }

  async update(id: number, dto: UpdateDetalhesOrdemProducaoDto): Promise<DetalhesOrdemProducao> {
    const row = await this.findOne(id);
    Object.assign(row, dto);
    return this.repo.save(row);
  }


  async updateByOp(op: string, dto: UpdateDetalhesOrdemProducaoDto): Promise<DetalhesOrdemProducao> {
    const row = await this.repo.findOne({ where: { op } });
    if (!row) throw new NotFoundException(`DetalhesOrdemProducao op=${op} não encontrado`);
    Object.assign(row, dto);
    return this.repo.save(row);
  }

  async remove(id: number): Promise<void> {
    const row = await this.findOne(id);
    await this.repo.remove(row);
  }

  async removeByOp(op: string): Promise<void> {
    const row = await this.repo.findOne({ where: { op } });
    if (!row) throw new NotFoundException(`DetalhesOrdemProducao op=${op} não encontrado`);
    await this.repo.remove(row);
  }
}
