import {UseGuards, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusRevisaoService } from './status_revisao.service';
import { CreateStatusRevisaoDto } from './dtos/create-status_revisao.dto';
import { UpdateStatusRevisaoDto } from './dtos/update-status_revisao.dto';
import { JwtAuthGuard } from 'src/roleguard/role.guard';

@Controller('status_revisao')
export class StatusRevisaoController {
  constructor(private readonly statusService: StatusRevisaoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()                                                 
  create(@Body() CreateStatusRevisaoDto: CreateStatusRevisaoDto) {
    return this.statusService.create(CreateStatusRevisaoDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.statusService.findAll();
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findAll(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateStatusRevisaoDto: CreateStatusRevisaoDto) {
    return this.statusService.update(+id, CreateStatusRevisaoDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}

