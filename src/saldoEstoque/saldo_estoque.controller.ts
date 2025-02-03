import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateSaldoEstoqueDto } from './dtos/create_saldo_estoque.dtos';
import { UpdateSaldoEstoqueDto } from './dtos/update_saldo_estoque.dtos';
import { SaldoEstoque } from './interfaces/saldo_estoque.entity';
import { SaldoEstoqueService } from './saldo_estoque.service';


@Controller('saldo-estoque')
export class SaldoEstoqueController {
  constructor(private readonly saldoEstoqueService: SaldoEstoqueService) {}

  @Post()
  async create(@Body() createSaldoEstoqueDto: CreateSaldoEstoqueDto) {
    return this.saldoEstoqueService.create(createSaldoEstoqueDto);
  }

  @Get()
  async findAll() {
    return this.saldoEstoqueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.saldoEstoqueService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSaldoEstoqueDto: UpdateSaldoEstoqueDto,
  ) {
    return this.saldoEstoqueService.update(id, updateSaldoEstoqueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.saldoEstoqueService.remove(id);
  }

  @Delete()
  async removeAll() {
    return this.saldoEstoqueService.removeAll();
  }
}
