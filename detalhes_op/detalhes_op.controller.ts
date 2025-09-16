import { Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { DetalhesOpService } from './detalhes_op.service';
import { CreateDetalhesOpDto } from './dtos/create-detalhes_op.dto';
import { UpdateDetalhesOpDto } from './dtos/update-detalhes_op.dto';

@Controller('detalhes_op')
export class DetalhesOpController {
  constructor(private readonly detalhesOpService: DetalhesOpService) {}

  @Post()
  create(@Body() createDetalhesOpDto: CreateDetalhesOpDto) {
    return this.detalhesOpService.create(createDetalhesOpDto);
  }

  @Get()
  findAll() {
    return this.detalhesOpService.findAll();
  }

  @Get(':ordem_prod')
  find(@Param('ordem_prod') ordem_prod: string) {
    return this.detalhesOpService.find(ordem_prod);
  }

  @Put(':ordem_prod')
  update(@Param('ordem_prod') ordem_prod: string, @Body() dto: UpdateDetalhesOpDto) {
    return this.detalhesOpService.update(ordem_prod, dto);
  }

  @Patch(':ordem_prod/:desc_oper')
  patch(
    @Param('ordem_prod') ordem_prod: string,
    @Param('desc_oper') desc_oper: string,
    @Body() dto: UpdateDetalhesOpDto
  ) {
    return this.detalhesOpService.patch(ordem_prod, desc_oper, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalhesOpService.remove(+id);
  }
}
