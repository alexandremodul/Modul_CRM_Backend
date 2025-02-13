import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apontamentos } from './interface/apontamentos.entity';
import { CreateApontamentosDto } from './dtos/create-apontamentos.dto';
import { UpdateApontamentosDto } from './dtos/update-apontamentos.dto';

@Injectable()
export class ApontamentosService {
  constructor(
    @InjectRepository(Apontamentos)
    private readonly apontamentosRepository: Repository<Apontamentos>,
  ) {}

  async create(createApontamentosDto: CreateApontamentosDto): Promise<Apontamentos> {
    const apontamento = this.apontamentosRepository.create(createApontamentosDto);
    return this.apontamentosRepository.save(apontamento);
  }

  findAll(): Promise<Apontamentos[]> {
    return this.apontamentosRepository.find();
  }

  async findAllByOrdemProducao(ordem_producao: string): Promise<Apontamentos[]> {
    return this.apontamentosRepository.find({ where: { ordem_producao } });
  }

  async findOne(id: number): Promise<Apontamentos> {
    const apontamento = await this.apontamentosRepository.findOne({ where: { id } });
    if (!apontamento) {
      throw new NotFoundException(`Apontamento with ID ${id} not found`);
    }
    return apontamento;
  }

  async update(id: number, updateApontamentosDto: UpdateApontamentosDto): Promise<Apontamentos> {
    const apontamento = await this.findOne(id);
    Object.assign(apontamento, updateApontamentosDto);
    return this.apontamentosRepository.save(apontamento);
  }

  async updateByOrdemProducao(ordem_producao: string, updateApontamentosDto: UpdateApontamentosDto): Promise<Apontamentos> {
    const apontamento = await this.apontamentosRepository.findOne({ where: { ordem_producao } });
    if (!apontamento) {
      throw new NotFoundException(`Apontamento with ordem_producao ${ordem_producao} not found`);
    }
    Object.assign(apontamento, updateApontamentosDto);
    return this.apontamentosRepository.save(apontamento);
  }

  async remove(id: number): Promise<void> {
    const apontamento = await this.findOne(id);
    await this.apontamentosRepository.remove(apontamento);
  }

  async removeByOrdemProducao(ordem_producao: string): Promise<void> {
    const apontamento = await this.apontamentosRepository.findOne({ where: { ordem_producao } });
    if (!apontamento) {
      throw new NotFoundException(`Apontamento with ordem_producao ${ordem_producao} not found`);
    }
    await this.apontamentosRepository.remove(apontamento);
  }
}
