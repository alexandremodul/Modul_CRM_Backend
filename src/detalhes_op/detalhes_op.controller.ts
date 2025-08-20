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
    update(@Param('ordem_prod') ordem_prod: string, @Body() updateDetalhesOpDto: UpdateDetalhesOpDto) {
        return this.detalhesOpService.update(ordem_prod, updateDetalhesOpDto);
    }

     @Patch(':ordem_prod/:desc_oper')updateData(
        @Param('ordem_prod') ordem_prod: string,
        @Param('desc_oper') desc_oper: string,
        @Body('dt_planejada') dt_planejada: string
    ) {
        return this.detalhesOpService.updateData(ordem_prod, desc_oper, dt_planejada);
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.detalhesOpService.remove(+id);
    }
}
