import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusRevisaoService } from './status_revisao.service';
import { CreateStatusRevisaoDto } from './dtos/create-status_revisao.dto';
import { UpdateStatusRevisaoDto } from './dtos/update-status_revisao.dto';

@Controller('status_revisao')
export class StatusRevisaoController {
  constructor(private readonly statusService: StatusRevisaoService) {}

  @Post()                                                 
  create(@Body() CreateStatusRevisaoDto: CreateStatusRevisaoDto) {
    return this.statusService.create(CreateStatusRevisaoDto);
  }

  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateStatusRevisaoDto: CreateStatusRevisaoDto) {
    return this.statusService.update(+id, CreateStatusRevisaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}

