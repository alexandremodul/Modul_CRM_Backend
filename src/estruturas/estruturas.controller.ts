import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstruturasService } from './estruturas.service';
import { CreateEstruturasDto } from './dtos/create-estruturas.dto';
import { UpdateEstruturasDto } from './dtos/update-estruturas.dto';

@Controller('estruturas')
export class EstruturasController {
  constructor(private readonly estruturasService: EstruturasService) {}

  @Post()
  create(@Body() CreateEstruturasDto: CreateEstruturasDto) {
    return this.estruturasService.create(CreateEstruturasDto);
  }

  @Get()
  findAll() {
    return this.estruturasService.findAll();
  }

  @Get(':id_estruturas')
  findOne(@Param('id_estruturas') id_estruturas: string) {
    return this.estruturasService.findOne(+id_estruturas);
  }

  @Patch(':id_estruturas')
  update(@Param('id_estruturas') id_estruturas: string, @Body() UpdateEstruturasDto: UpdateEstruturasDto) {
    return this.estruturasService.update(+id_estruturas, UpdateEstruturasDto);
  }

  @Delete(':id_estruturas')
  remove(@Param('id_estruturas') id_estruturas: string) {
    return this.estruturasService.remove(+id_estruturas);
  }
}
