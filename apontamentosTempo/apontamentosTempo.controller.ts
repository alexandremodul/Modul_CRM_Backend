// src/apontamentosTempo/apontamentosTempo.controller.ts
import { Controller, Post, Body, Param, ParseIntPipe, Patch, Get, Query, BadRequestException } from '@nestjs/common';
import { ApontamentosTempoService } from './apontamentosTempo.service';
import { StartApontamentoDto } from './dtos/start-apontamento.dto';
import { StopApontamentoDto } from './dtos/stop-apontamento.dto';
import { ApontamentosTempo } from './interface/apontamentosTempo.entity';

@Controller('apontamentosTempo')
export class ApontamentosTempoController {
  constructor(private readonly service: ApontamentosTempoService) {}

  @Post('start')
  start(@Body() dto: StartApontamentoDto): Promise<ApontamentosTempo> {
    return this.service.start(dto);
  }

  @Patch(':id/stop')
  stopById(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: StopApontamentoDto
  ): Promise<ApontamentosTempo> {
    return this.service.stopById(id, dto);
  }

  @Patch('stop')
  stopByOpAndUsuario(
    @Query('op') op: string,
    @Query('usuario') usuario: string,
    @Body() dto: StopApontamentoDto
  ): Promise<ApontamentosTempo> {
    return this.service.stopByOpAndUsuario(op, usuario, dto);
  }

  @Get()
  findAll(): Promise<ApontamentosTempo[]> {
    return this.service.findAll();
  }

  @Get('by-op/:op')
  findAllByOp(@Param('op') op: string): Promise<ApontamentosTempo[]> {
    return this.service.findAllByOp(op);
  }

  @Get('search')
  async searchByItemAndOperacao(
    @Query('item') item?: string,
    @Query('operacao') operacao?: string
  ): Promise<ApontamentosTempo[]> {
    if (!item || !operacao) {
      throw new BadRequestException('Parâmetros "item" e "operacao" são obrigatórios.');
    }
    return this.service.findByItemAndOperacao(item, operacao);
  }
}
