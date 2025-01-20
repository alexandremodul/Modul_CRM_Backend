import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoteiroDetalhesSerivce } from './roteiros_detalhes.service';
import { CreateRoteirosDetalhesDto } from './dtos/create_roteiros_detalhes.dto';
import { UpdateProdutoDto } from './dtos/update_roteiros_detalhes.dto';

@Controller('roteiros-detalhes')
export class RoteirosDetalhesController {
  constructor(private readonly roteirosDetalhesService: RoteiroDetalhesSerivce) {}

  @Post()
  create(@Body() createRoteirosDetalhesDto: CreateRoteirosDetalhesDto) {
    return this.roteirosDetalhesService.create(createRoteirosDetalhesDto);
  }

  @Get()
  findAll(@Param('produto_id') produto_id: number) {
    if (!produto_id) {
      throw new console.log('O parâmetro produto_id é obrigatório.');
    }
    return this.roteirosDetalhesService.findAll(produto_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roteirosDetalhesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoteirosDetalhesDto: UpdateProdutoDto) {
    return this.roteirosDetalhesService.update(+id, updateRoteirosDetalhesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roteirosDetalhesService.remove(+id);
  }
}
