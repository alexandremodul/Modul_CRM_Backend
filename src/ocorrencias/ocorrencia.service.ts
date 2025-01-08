// ocorrencia.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ocorrencia } from './interfaces/ocorrencia.entity';
import { CreateOcorrenciaDto } from './dtos/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dtos/update-ocorrencia.dto';

@Injectable()
export class OcorrenciaService {
  constructor(
    @InjectRepository(Ocorrencia) private readonly ocorrenciaRepository: Repository<Ocorrencia>,
  ) {}

  async create(createOcorrenciaDto: CreateOcorrenciaDto): Promise<Ocorrencia> {
    const ocorrencia = this.ocorrenciaRepository.create(createOcorrenciaDto);
    return await this.ocorrenciaRepository.save(ocorrencia);
  }

  async findAll(): Promise<Ocorrencia[]> {
    return this.ocorrenciaRepository.find();
  }

  async findOne(id: number): Promise<Ocorrencia> {
    return this.ocorrenciaRepository.findOneBy({ id_ocorrencia: id });
  }

  async update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto): Promise<Ocorrencia> {
    await this.ocorrenciaRepository.update(id, updateOcorrenciaDto);
    return this.findOne(id);  
  }
  async removeAll(): Promise<void> {
    await this.ocorrenciaRepository.clear(); // Esse comando exclui todos os dados da tabela
  }
  async remove(id: number): Promise<void> {
    await this.ocorrenciaRepository.delete(id);
  }
}
