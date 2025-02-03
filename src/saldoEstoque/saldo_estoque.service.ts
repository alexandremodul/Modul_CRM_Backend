import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaldoEstoqueDto } from './dtos/create_saldo_estoque.dtos';
import { UpdateSaldoEstoqueDto } from './dtos/update_saldo_estoque.dtos';
import { SaldoEstoque } from './interfaces/saldo_estoque.entity';


@Injectable()
export class SaldoEstoqueService {
  constructor(
    @InjectRepository(SaldoEstoque)
    private readonly saldoEstoqueRepository: Repository<SaldoEstoque>,
  ) {}

  async create(createSaldoEstoqueDto: CreateSaldoEstoqueDto): Promise<SaldoEstoque> {
    const saldoEstoque = this.saldoEstoqueRepository.create(createSaldoEstoqueDto);
    return this.saldoEstoqueRepository.save(saldoEstoque);
  }

  async findAll(): Promise<SaldoEstoque[]> {
    return this.saldoEstoqueRepository.find();
  }

  async findOne(id: number): Promise<SaldoEstoque> {
    const saldoEstoque = await this.saldoEstoqueRepository.findOneBy({ id });
    if (!saldoEstoque) {
      throw new NotFoundException(`SaldoEstoque com ID ${id} não encontrado`);
    }
    return saldoEstoque;
  }

  async update(id: number, updateSaldoEstoqueDto: UpdateSaldoEstoqueDto): Promise<SaldoEstoque> {
    const saldoEstoque = await this.saldoEstoqueRepository.preload({
      id,
      ...updateSaldoEstoqueDto,
    });
    if (!saldoEstoque) {
      throw new NotFoundException(`SaldoEstoque com ID ${id} não encontrado`);
    }
    return this.saldoEstoqueRepository.save(saldoEstoque);
  }

  async remove(id: number): Promise<void> {
    const saldoEstoque = await this.findOne(id);
    await this.saldoEstoqueRepository.remove(saldoEstoque);
  }

  async removeAll(): Promise<void> {
    await this.saldoEstoqueRepository.clear();
  }
}
