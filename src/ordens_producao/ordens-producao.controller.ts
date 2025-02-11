import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdensProducaoService } from './ordens-producao.service';
import { CreateOrdensProaducaoDto } from './dtos/create-ordens-producao.dto';
import { UpdateOrdensProducaoDto } from './dtos/update-ordens-producao.dto';
import { OrdensProducao } from './interfaces/ordens-producao.entity';

@Controller('ordens-producao')
export class OrdensProducaoController {
  constructor(private readonly ordensProducaoService: OrdensProducaoService) {}

  @Post()
  create(@Body() createOrdensProducaoDto: CreateOrdensProaducaoDto): Promise<OrdensProducao> {
    return this.ordensProducaoService.create(createOrdensProducaoDto);
  }

  @Get()
  findAll(): Promise<OrdensProducao[]> {
    return this.ordensProducaoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<OrdensProducao> {
  //   return this.ordensProducaoService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updateOrdensProducaoDto: UpdateOrdensProducaoDto): Promise<OrdensProducao> {
  //   return this.ordensProducaoService.update(id, updateOrdensProducaoDto);
  // }

  @Get(':ord_producao')
  findAllByNumeroOp(@Param('ord_producao') ord_producao: string): Promise<OrdensProducao[]> {
    return this.ordensProducaoService.findAllByNumeroOp(ord_producao);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.ordensProducaoService.remove(id);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.ordensProducaoService.removeAll();
  }
}
