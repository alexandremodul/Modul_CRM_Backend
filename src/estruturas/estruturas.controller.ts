import { UseGuards, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstruturasService } from './estruturas.service';
import { CreateEstruturasDto } from './dtos/create-estruturas.dto';
import { UpdateEstruturasDto } from './dtos/update-estruturas.dto';
import { JwtAuthGuard } from 'src/roleguard/role.guard';

@Controller('estruturas')
export class EstruturasController {
  constructor(private readonly estruturasService: EstruturasService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() CreateEstruturasDto: CreateEstruturasDto) {
    return this.estruturasService.create(CreateEstruturasDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.estruturasService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.estruturasService.findOne(codigo);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id_estruturas')
  update(@Param('id_estruturas') id_estruturas: string, @Body() UpdateEstruturasDto: UpdateEstruturasDto) {
    return this.estruturasService.update(+id_estruturas, UpdateEstruturasDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.estruturasService.remove(codigo);
  }
}
