import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalhesOrdemProducaoService } from './detalhes_ordem_producao.service';
import { CreateDetalhesOrdemProducaoDto } from './dtos/create-detalhes-ordem-producao.dto';
import { UpdateDetalhesOrdemProducaoDto } from './dtos/update-detalhes-ordem-producao.dto';

@Controller('detalhes-ordem-producao')
export class DetalhesOrdemProducaoController {
  constructor(private readonly service: DetalhesOrdemProducaoService) {}

  @Post()
  create(@Body() dto: CreateDetalhesOrdemProducaoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':op')
  findAllByOp(@Param('op') op: string) {
    return this.service.findAllByOp(op);
  }

  @Patch(':op')
  updateByOp(@Param('op') op: string, @Body() dto: UpdateDetalhesOrdemProducaoDto) {
    return this.service.updateByOp(op, dto);
  }

  @Delete(':op')
  removeByOp(@Param('op') op: string) {
    return this.service.removeByOp(op);
  }
}
