import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProdutosDetalhesService } from './produtos_detalhes.service';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { JwtAuthGuard } from 'src/roleguard/role.guard';

@Controller('produtos_detalhes')
export class ProdutosDetalhesController {
  constructor(private readonly produtosService: ProdutosDetalhesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()                                                 
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get(':codigo')
  findAll(@Param('codigo') codigo: string) {
    return this.produtosService.findAll(codigo);
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.produtosService.findAll(codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(codigo, updateProdutoDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.produtosService.remove(codigo);
  }
}

