import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApontamentosService } from './apontamentos.service';
import { CreateApontamentosDto } from './dtos/create-apontamentos.dto';
import { UpdateApontamentosDto } from './dtos/update-apontamentos.dto';

@Controller('apontamentos')
export class ApontamentosController {
  constructor(private readonly apontamentosService: ApontamentosService) {}

  @Post()
  create(@Body() createApontamentosDto: CreateApontamentosDto) {
    return this.apontamentosService.create(createApontamentosDto);
  }

  @Get()
  findAll() {
    return this.apontamentosService.findAll();
  }

  @Get(':ordem_producao')
  findAllByOrdemProducao(@Param('ordem_producao') ordem_producao: string) {
    return this.apontamentosService.findAllByOrdemProducao(ordem_producao);
  }

  @Patch(':ordem_producao')
  update(@Param('ordem_producao') ordem_producao: string, @Body() updateApontamentosDto: UpdateApontamentosDto) {
    return this.apontamentosService.updateByOrdemProducao(ordem_producao, updateApontamentosDto);
  }

  @Delete(':ordem_producao')
  remove(@Param('ordem_producao') ordem_producao: string) {
    return this.apontamentosService.removeByOrdemProducao(ordem_producao);
  }
}
