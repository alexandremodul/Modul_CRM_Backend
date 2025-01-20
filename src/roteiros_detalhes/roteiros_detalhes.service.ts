import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roteiros_detalhes } from './interfaces/roteiros_detalhes.entity';
import { CreateRoteirosDetalhesDto } from './dtos/create_roteiros_detalhes.dto';
import { UpdateProdutoDto } from './dtos/update_roteiros_detalhes.dto';

@Injectable()
export class RoteiroDetalhesSerivce {
  constructor(
    @InjectRepository(Roteiros_detalhes)
    private readonly roteirosDetalhesRepository: Repository<Roteiros_detalhes>,
  ) {}

  async create(createRoteirosDetalhesDto: CreateRoteirosDetalhesDto): Promise<Roteiros_detalhes> {
    const newRoteiroDetalhes = this.roteirosDetalhesRepository.create(createRoteirosDetalhesDto);
    return this.roteirosDetalhesRepository.save(newRoteiroDetalhes);
  }

  async findAll(produto_id: number): Promise<Roteiros_detalhes[]> {
    return this.roteirosDetalhesRepository.find({
      where: { produto_id },
    });
  }
  async findOne(id: number): Promise<Roteiros_detalhes> {
    const roteiroDetalhes = await this.roteirosDetalhesRepository.findOne({ where: { id_roteiro_detalhes: id } });
    if (!roteiroDetalhes) {
      throw new NotFoundException(`Roteiro detalhe com ID ${id} não encontrado`);
    }
    return roteiroDetalhes;
  }

  async update(id: number, updateRoteirosDetalhesDto: UpdateProdutoDto): Promise<Roteiros_detalhes> {
    const roteiroDetalhes = await this.findOne(id);
    const updated = Object.assign(roteiroDetalhes, updateRoteirosDetalhesDto);
    return this.roteirosDetalhesRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const roteiroDetalhes = await this.findOne(id);
    await this.roteirosDetalhesRepository.remove(roteiroDetalhes);
  }
}
