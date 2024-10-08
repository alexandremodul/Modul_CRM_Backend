import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosRevisaoService } from './produtos_revisao.service';
import { CreateProdutoRevisaoDto } from './dtos/create-produto_revisao.dto';
import { UpdateProdutoRevisaoDto } from './dtos/update-produto_revisao.dto';

@Controller('produtos_revisao')
export class ProdutosRevisaoController {
  constructor(private readonly produtosService: ProdutosRevisaoService) {}

  @Post()                                                 
  create(@Body() CreateProdutoRevisaoDto: CreateProdutoRevisaoDto) {
    return this.produtosService.create(CreateProdutoRevisaoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id_codigo')
  findOne(@Param('id_codigo') id_codigo: string) {
    return this.produtosService.findOne(+id_codigo);
  }

  @Patch(':id_codigo')
  update(@Param('id_codigo') id_codigo: string, @Body() UpdateProdutoRevisaoDto: UpdateProdutoRevisaoDto) {
    return this.produtosService.update(+id_codigo, UpdateProdutoRevisaoDto);
  }

  @Delete(':id_codigo')
  remove(@Param('id_codigo') id_codigo: string) {
    return this.produtosService.remove(+id_codigo);
  }
}

