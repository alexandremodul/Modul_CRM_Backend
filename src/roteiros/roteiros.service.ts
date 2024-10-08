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

  async findOne(id_roteiro: number): Promise<Roteiros> {
    const Roteiro = await this.RoteirosRepository.findOneBy({ id_roteiro });
    if (!Roteiro) {
      throw new NotFoundException(`Roteiro com id_roteiro ${id_roteiro} não encontrado`);
    }
    return Roteiro;
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

  async remove(id_roteiro: number): Promise<void> {
    const Roteiro = await this.findOne(id_roteiro);
    await this.RoteirosRepository.remove(Roteiro);
  }
}