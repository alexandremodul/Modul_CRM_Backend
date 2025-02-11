import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { RoteiroDetalhesService } from './roteiros_detalhes.service';
import { CreateRoteirosDetalhesDto } from './dtos/create_roteiros_detalhes.dto';
import { UpdateProdutoDto } from './dtos/update_roteiros_detalhes.dto';

@Controller('roteiros-detalhes')
export class RoteirosDetalhesController {
  constructor(private readonly roteirosDetalhesService: RoteiroDetalhesService) {}

  @Post()
  create(@Body() createRoteirosDetalhesDto: CreateRoteirosDetalhesDto) {
    return this.roteirosDetalhesService.create(createRoteirosDetalhesDto);
  }

  @Get(':produto_id')
  findAll(@Param('produto_id') produto_id: string) { // Change @Query to @Param
    return this.roteirosDetalhesService.findAll(produto_id);
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
