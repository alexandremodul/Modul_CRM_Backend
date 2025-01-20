// ocorrencia.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdensProducao } from './interfaces/ordens-producao.entity';
import { CreateOrdensProaducaoDto } from './dtos/create-ordens-producao.dto';
import { UpdateOrdensProducaoDto } from './dtos/update-ordens-producao.dto';

@Injectable()
export class OrdensProducaoService {
  constructor(
    @InjectRepository(OrdensProducao) private readonly ocorrenciaRepository: Repository<OrdensProducao>,
  ) {}

  async create(createOcorrenciaDto: CreateOrdensProaducaoDto): Promise<OrdensProducao> {
    const ocorrencia = this.ocorrenciaRepository.create(createOcorrenciaDto);
    return await this.ocorrenciaRepository.save(ocorrencia);
  }

  async findAll(): Promise<OrdensProducao[]> {
    return this.ocorrenciaRepository.find();
  }

  async findOne(id: number): Promise<OrdensProducao> {
    return this.ocorrenciaRepository.findOneBy({ id_codigo: id });
  }

  async update(id: number, updateOcorrenciaDto: UpdateOrdensProducaoDto): Promise<OrdensProducao> {
    await this.ocorrenciaRepository.update(id, updateOcorrenciaDto);
    return this.findOne(id);  
  }
  async removeAll(): Promise<void> {
    await this.ocorrenciaRepository.clear(); 
  }
  async remove(id: number): Promise<void> {
    await this.ocorrenciaRepository.delete(id);
  }
}
