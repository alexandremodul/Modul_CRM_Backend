import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusRevisaoDto } from './dtos/create-status_revisao.dto';
import { UpdateStatusRevisaoDto } from './dtos/update-status_revisao.dto';
import { Status_revisao } from './interfaces/status_revisao.entity';

@Injectable()
export class StatusRevisaoService {
  constructor(
    @InjectRepository(Status_revisao)
    private readonly produtosRepository: Repository<Status_revisao>,
  ) {}

  async create(createProdutoDto: CreateStatusRevisaoDto): Promise<Status_revisao> {
    const Status_revisao = this.produtosRepository.create(createProdutoDto);
    return this.produtosRepository.save(Status_revisao);
  }

  // async findAll(): Promise<Status_revisao[]> {
  //   return this.produtosRepository.find();
  // }
  async findAll(): Promise<Status_revisao[]> {
    const produtos = await this.produtosRepository.find(); 
    
    if (!produtos || produtos.length === 0) { 
      throw new NotFoundException(`Nenhum produto encontrado`);
    }
  
    return produtos; 
  }

  async update(id: number, UpdateStatusRevisaoDto: UpdateStatusRevisaoDto): Promise<Status_revisao> {
    const produto = await this.produtosRepository.preload({
      id,
      ...UpdateStatusRevisaoDto,
    });
    if (!produto) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }
    return this.produtosRepository.save(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findAll();
    await this.produtosRepository.remove(produto);
  }
}
