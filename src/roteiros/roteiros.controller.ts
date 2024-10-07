import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoteirosService } from './roteiros.service';
import { CreateRoteiroDto } from './dtos/create-roteiros.dto';
import { UpdateRoteiroDto } from './dtos/update-roteiros.dto';

@Controller('roteiros')
export class RoteirosController {
  constructor(private readonly roteirosService: RoteirosService) {}

  @Post()
  create(@Body() createRoteiroDto: CreateRoteiroDto) {
    return this.roteirosService.create(createRoteiroDto);
  }

  @Get()
  findAll() {
    return this.roteirosService.findAll();
  }

  @Get(':id_roteiro')
  findOne(@Param('id_roteiro') id_roteiro: string) {
    return this.roteirosService.findOne(+id_roteiro);
  }

  @Patch(':id_roteiro')
  update(@Param('id_roteiro') id_roteiro: string, @Body() updateRoteiroDto: UpdateRoteiroDto) {
    return this.roteirosService.update(+id_roteiro, updateRoteiroDto);
  }

  @Delete(':id_roteiro')
  remove(@Param('id_roteiro') id_roteiro: string) {
    return this.roteirosService.remove(+id_roteiro);
  }
}
