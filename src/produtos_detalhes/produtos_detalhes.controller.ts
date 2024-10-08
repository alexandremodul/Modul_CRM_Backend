import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosDetalhesService } from './produtos_detalhes.service';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { UpdateProdutoDto } from './dtos/update-produto.dto';

@Controller('produtos_detalhes')
export class ProdutosDetalhesController {
  constructor(private readonly produtosService: ProdutosDetalhesService) {}

  @Post()                                                 
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
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
  update(@Param('id_codigo') id_codigo: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id_codigo, updateProdutoDto);
  }

  @Delete(':id_codigo')
  remove(@Param('id_codigo') id_codigo: string) {
    return this.produtosService.remove(+id_codigo);
  }
}

