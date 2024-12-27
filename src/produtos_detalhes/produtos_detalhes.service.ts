import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { Produto } from './interfaces/produtos_detalhes.entity';

@Injectable()
export class ProdutosDetalhesService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtosRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtosRepository.create(createProdutoDto);
    return this.produtosRepository.save(produto);
  }

  // async findAll(): Promise<Produto[]> {
  //   return this.produtosRepository.find();
  // }

  async findAll(codigo: string): Promise<Produto[]> {
    const produtos = await this.produtosRepository.find({
        where: { codigo },
    });
    if (!produtos || produtos.length === 0) {
        throw new NotFoundException(`Produto com codigo ${codigo} não encontrado`);
    }
    return produtos;
}


  async update(codigo: string, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.produtosRepository.preload({
      codigo,
      ...updateProdutoDto,
    });
    if (!produto) {
      throw new NotFoundException(`Produto com id_codigo ${codigo} não encontrado`);
    }
    return this.produtosRepository.save(produto);
  }

  async remove(codigo: string): Promise<void> {
    const produto = await this.findAll(codigo);
    await this.produtosRepository.remove(produto);
  }
}
