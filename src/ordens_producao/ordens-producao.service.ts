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
    @InjectRepository(OrdensProducao) private readonly ordensProducaoRepo: Repository<OrdensProducao>,
  ) {}

  async create(createOcorrenciaDto: CreateOrdensProaducaoDto): Promise<OrdensProducao> {
    const ocorrencia = this.ordensProducaoRepo.create(createOcorrenciaDto);
    return await this.ordensProducaoRepo.save(ocorrencia);
  }

  async findAll(): Promise<OrdensProducao[]> {
    return this.ordensProducaoRepo.find();
  }

  // async findOne(id: number): Promise<OrdensProducao> {
  //   return this.ordensProducaoRepo.findOneBy({ id_codigo: id });
  // }
async findAllByNumeroOp(ord_producao: string): Promise<OrdensProducao[]> {
    return this.ordensProducaoRepo.find({ where: { ord_producao } });
  }
  
  // async update(id: number, updateOcorrenciaDto: UpdateOrdensProducaoDto): Promise<OrdensProducao> {
  //   await this.ordensProducaoRepo.update(id, updateOcorrenciaDto);
  //   return this.findOne(id);  
  // }
  async removeAll(): Promise<void> {
    await this.ordensProducaoRepo.clear(); 
  }
  async remove(id: number): Promise<void> {
    await this.ordensProducaoRepo.delete(id);
  }
}
