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

  async findOne(id_codigo: number): Promise<Produtos_revisao> {
    const produto = await this.produtosRepository.findOneBy({ id_codigo });
    if (!produto) {
      throw new NotFoundException(`Produto com id_codigo ${id_codigo} não encontrado`);
    }
    return produto;
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

  async remove(id_codigo: number): Promise<void> {
    const produto = await this.findOne(id_codigo);
    await this.produtosRepository.remove(produto);
  }
}
