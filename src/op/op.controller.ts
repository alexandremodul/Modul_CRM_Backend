import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OpService } from './op.service';  
import { CreateOpDto } from './dtos/create-op.dto';  
import { UpdateOpDto } from './dtos/update-op.dto';  
import { Op } from './interfaces/op.entity';  

@Controller('op')
export class OpController {
  constructor(private readonly opService: OpService) {}

  @Post()
  create(@Body() createOpDto: CreateOpDto): Promise<Op> {
    return this.opService.create(createOpDto);
  }

  @Get()
  findAll(): Promise<Op[]> {
    return this.opService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Op> {
    return this.opService.findOne(id);
  }

  @Get(':numero_op')
  findAllByNumeroOp(@Param('numero_op') numero_op: string): Promise<Op[]> {
    return this.opService.findAllByNumeroOp(numero_op);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateOpDto: UpdateOpDto): Promise<Op> {
    return this.opService.update(id, updateOpDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.opService.remove(id);
  }

  @Delete()
  removeAll(): Promise<void> {
    return this.opService.removeAll();
  }
}
