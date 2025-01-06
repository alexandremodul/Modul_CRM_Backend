import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoteirosService } from './roteiros.service';
import { CreateRoteiroDto } from './dtos/create-roteiros.dto';
import { UpdateRoteiroDto } from './dtos/update-roteiros.dto';
import { JwtAuthGuard } from 'src/roleguard/role.guard';

@Controller('roteiros')
export class RoteirosController {
  constructor(private readonly roteirosService: RoteirosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRoteiroDto: CreateRoteiroDto) {
    return this.roteirosService.create(createRoteiroDto);
  }

  @Get()
  findAll() {
    return this.roteirosService.findAll();
  }

  @Get(':produto')
  findOne(@Param('produto') produto: string) {
    return this.roteirosService.findByProduto(produto);
  }

  @Patch(':id_roteiro')
  update(@Param('id_roteiro') id_roteiro: string, @Body() updateRoteiroDto: UpdateRoteiroDto) {
    return this.roteirosService.update(+id_roteiro, updateRoteiroDto);
  }

  @Delete(':id_roteiro')
  remove(@Param('id_roteiro') id_roteiro: string) {
    return this.roteirosService.remove(+id_roteiro);
  }

  @Delete()
removeAll() {
    return this.roteirosService.removeAll();
}
}
