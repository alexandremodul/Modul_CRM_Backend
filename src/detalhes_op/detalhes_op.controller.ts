import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.detalhesOpService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDetalhesOpDto: UpdateDetalhesOpDto) {
        return this.detalhesOpService.update(+id, updateDetalhesOpDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.detalhesOpService.remove(+id);
    }
}
