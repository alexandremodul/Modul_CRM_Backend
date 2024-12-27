import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoRevisaoDto } from './dtos/create-produto_revisao.dto';
import { UpdateProdutoRevisaoDto } from './dtos/update-produto_revisao.dto';
import { Produtos_revisao } from './interfaces/produtos_revisao.entity';

@Injectable()
export class ProdutosRevisaoService {
  constructor(
    @InjectRepository(Produtos_revisao)
    private readonly produtosRepository: Repository<Produtos_revisao>,
  ) {}

  async create(createProdutoDto: CreateProdutoRevisaoDto): Promise<Produtos_revisao> {
    const Produtos_revisao = this.produtosRepository.create(createProdutoDto);
    return this.produtosRepository.save(Produtos_revisao);
  }

  async findAll(): Promise<Produtos_revisao[]> {
    return this.produtosRepository.find();
  }

    async findByCodigo(codigo: string): Promise<Produtos_revisao[]> { 
      const produtos = await this.produtosRepository.find({ where: { codigo } });
      
      if (produtos.length === 0) {
        throw new NotFoundException(`Produto com código ${codigo} não encontrado`);
      }
      
      return produtos;
    }

  async update(id_codigo: number, UpdateProdutoRevisaoDto: UpdateProdutoRevisaoDto): Promise<Produtos_revisao> {
    const produto = await this.produtosRepository.preload({
      id_codigo,
      ...UpdateProdutoRevisaoDto,
    });
    if (!produto) {
      throw new NotFoundException(`Produto com id_codigo ${id_codigo} não encontrado`);
    }
    return this.produtosRepository.save(produto);
  }

  async remove(codigo: string): Promise<void> {
    const produto = await this.findAll();
    await this.produtosRepository.remove(produto);
  }
}
