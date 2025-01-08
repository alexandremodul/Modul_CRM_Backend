import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstruturasDto } from './dtos/create-estruturas.dto';
import { UpdateEstruturasDto } from './dtos/update-estruturas.dto';
import { Estruturas } from './interfaces/estruturas.entity';

@Injectable()
export class EstruturasService {
  constructor(
    @InjectRepository(Estruturas)
    private readonly EstruturasRepository: Repository<Estruturas>,
  ) {}

  async create(CreateEstruturasDto: CreateEstruturasDto): Promise<Estruturas> {
    const Estruturas = this.EstruturasRepository.create(CreateEstruturasDto);
    return this.EstruturasRepository.save(Estruturas);
  }

  async findAll(): Promise<Estruturas[]> {
    return this.EstruturasRepository.find();
  }

  async find(codigo: string): Promise<Estruturas[]> {
    const Estruturas = await this.EstruturasRepository.find({ where: { codigo } });
    if (Estruturas.length === 0) {
      throw new NotFoundException(`Nenhuma estrutura encontrada com o código ${codigo}`);
    }
    return Estruturas;
  }

  async update(id_estruturas: number, UpdateEstruturasDto: UpdateEstruturasDto): Promise<Estruturas> {
    const Estruturas = await this.EstruturasRepository.preload({
      id_estruturas,
      ...UpdateEstruturasDto,
    });
    if (!Estruturas) {
      throw new NotFoundException(`Estruturas com id_estruturas ${id_estruturas} não encontrado`);
    }
    return this.EstruturasRepository.save(Estruturas);
  }

  async remove(codigo: string): Promise<void> {
    const Estruturas = await this.find(codigo);
    await this.EstruturasRepository.remove(Estruturas);
  }

  async removeAll(): Promise<void> {
    await this.EstruturasRepository.clear(); 
  }
}