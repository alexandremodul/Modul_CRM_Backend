import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roteiros_detalhes } from './interfaces/roteiros_detalhes.entity';
import { CreateRoteirosDetalhesDto } from './dtos/create_roteiros_detalhes.dto';
import { UpdateProdutoDto } from './dtos/update_roteiros_detalhes.dto';

@Injectable()
export class RoteiroDetalhesService {
  constructor(
    @InjectRepository(Roteiros_detalhes)
    private readonly roteirosDetalhesRepository: Repository<Roteiros_detalhes>,
  ) {}

  async create(createRoteirosDetalhesDto: CreateRoteirosDetalhesDto): Promise<Roteiros_detalhes> {
    const existingRoteiroDetalhes = await this.roteirosDetalhesRepository.findOne({
      where: {
        produto_id: createRoteirosDetalhesDto.produto_id,
        operacao_descr: createRoteirosDetalhesDto.operacao_descr,
      },
    });

    if (existingRoteiroDetalhes) {
      existingRoteiroDetalhes.tempo = createRoteirosDetalhesDto.tempo;
      return this.roteirosDetalhesRepository.save(existingRoteiroDetalhes);
    }

    const newRoteiroDetalhes = this.roteirosDetalhesRepository.create(createRoteirosDetalhesDto);
    return this.roteirosDetalhesRepository.save(newRoteiroDetalhes);
  }

  async findAll(produto_id: string): Promise<Roteiros_detalhes[]> {
    return this.roteirosDetalhesRepository.find({
      where: { produto_id },
    });
  }

  async update(id: number, updateRoteirosDetalhesDto: UpdateProdutoDto): Promise<Roteiros_detalhes> {
    const roteiroDetalhes = await this.roteirosDetalhesRepository.findOne({
      where: { id_roteiro_detalhes: id },
    });

    if (!roteiroDetalhes) {
      throw new NotFoundException(`Roteiro detalhe com ID ${id} não encontrado`);
    }

    Object.assign(roteiroDetalhes, updateRoteirosDetalhesDto);
    return this.roteirosDetalhesRepository.save(roteiroDetalhes);
  }

  async remove(id: number): Promise<void> {
    const roteiroDetalhes = await this.roteirosDetalhesRepository.findOne({
      where: { id_roteiro_detalhes: id },
    });

    if (!roteiroDetalhes) {
      throw new NotFoundException(`Roteiro detalhe com ID ${id} não encontrado`);
    }

    await this.roteirosDetalhesRepository.remove(roteiroDetalhes);
  }
}
