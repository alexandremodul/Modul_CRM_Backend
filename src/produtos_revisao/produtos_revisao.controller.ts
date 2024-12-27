import { UseGuards, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosRevisaoService } from './produtos_revisao.service';
import { CreateProdutoRevisaoDto } from './dtos/create-produto_revisao.dto';
import { UpdateProdutoRevisaoDto } from './dtos/update-produto_revisao.dto';
import { JwtAuthGuard } from 'src/roleguard/role.guard';

@Controller('produtos_revisao')
export class ProdutosRevisaoController {
  constructor(private readonly produtosService: ProdutosRevisaoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()                                                 
  create(@Body() CreateProdutoRevisaoDto: CreateProdutoRevisaoDto) {
    return this.produtosService.create(CreateProdutoRevisaoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.produtosService.findAll();
  }


  @UseGuards(JwtAuthGuard)
  @Get(':codigo')  
  async findByCodigo(@Param('codigo') codigo: string) {
    return await this.produtosService.findByCodigo(codigo);
  }


  @UseGuards(JwtAuthGuard)
  @Patch(':id_codigo')
  update(@Param('id_codigo') id_codigo: string, @Body() UpdateProdutoRevisaoDto: UpdateProdutoRevisaoDto) {
    return this.produtosService.update(+id_codigo, UpdateProdutoRevisaoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.produtosService.remove(codigo);
  }
}
