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

  async findOne(id_estruturas: number): Promise<Estruturas> {
    const Estruturas = await this.EstruturasRepository.findOneBy({ id_estruturas });
    if (!Estruturas) {
      throw new NotFoundException(`Estruturas com id_estruturas ${id_estruturas} não encontrado`);
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

  async remove(id_estruturas: number): Promise<void> {
    const Estruturas = await this.findOne(id_estruturas);
    await this.EstruturasRepository.remove(Estruturas);
  }
}
