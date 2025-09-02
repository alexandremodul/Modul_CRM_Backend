import { PartialType } from '@nestjs/mapped-types';
import { CreateApontamentosTempoDto } from './create-apontamentosTempo.dto';

export class UpdateApontamentosTempoDto extends PartialType(CreateApontamentosTempoDto) {}
