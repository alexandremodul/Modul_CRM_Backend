// ocorrencia.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { CreateOcorrenciaDto } from './dtos/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dtos/update-ocorrencia.dto';
import { Ocorrencia } from './interfaces/ocorrencia.entity';

@Controller('ocorrencias')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService) {}
  @Post()
  create(@Body() createOcorrenciaDto: CreateOcorrenciaDto): Promise<Ocorrencia> {
    return this.ocorrenciaService.create(createOcorrenciaDto);
  }

  @Get()
  findAll(): Promise<Ocorrencia[]> {
    return this.ocorrenciaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Ocorrencia> {
    return this.ocorrenciaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateOcorrenciaDto: UpdateOcorrenciaDto): Promise<Ocorrencia> {
    return this.ocorrenciaService.update(id, updateOcorrenciaDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.ocorrenciaService.remove(id);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.ocorrenciaService.removeAll();
  }
}
