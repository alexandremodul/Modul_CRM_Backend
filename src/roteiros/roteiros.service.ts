import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoteiroDto } from './dtos/create-roteiros.dto';
import { UpdateRoteiroDto } from './dtos/update-roteiros.dto';
import { Roteiros } from './interfaces/roteiros.entity';

@Injectable()
export class RoteirosService {
  constructor(
    @InjectRepository(Roteiros)
    private readonly RoteirosRepository: Repository<Roteiros>,
  ) {}

  async create(CreateRoteiroDto: CreateRoteiroDto): Promise<Roteiros> {
    const Roteiros = this.RoteirosRepository.create(CreateRoteiroDto);
    return this.RoteirosRepository.save(Roteiros);
  }

  async findAll(): Promise<Roteiros[]> {
    return this.RoteirosRepository.find();
  }

  
  async findByProduto(produto: string | number): Promise<Roteiros[]> {
    const roteiros = await this.RoteirosRepository.findBy({ produto: produto.toString() });
    if (roteiros.length === 0) {
      throw new NotFoundException(`Nenhum roteiro encontrado para o produto ${produto}`);
    }
    return roteiros;
  }

  async update(id_roteiro: number, UpdateRoteiroDto: UpdateRoteiroDto): Promise<Roteiros> {
    const Roteiro = await this.RoteirosRepository.preload({
      id_roteiro,
      ...UpdateRoteiroDto,
    });
    if (!Roteiro) {
      throw new NotFoundException(`Roteiro com id_roteiro ${id_roteiro} não encontrado`);
    }
    return this.RoteirosRepository.save(Roteiro);
  }


  async removeAll(): Promise<void> {
    await this.RoteirosRepository.clear(); // Limpa todos os registros da tabela
}

  async remove(id_roteiro: number): Promise<void> {
    const Roteiro = await this.findByProduto (id_roteiro);
    await this.RoteirosRepository.remove(Roteiro);
  }
}
