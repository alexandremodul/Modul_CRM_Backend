import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdensProaducaoDto } from './create-ordens-producao.dto';

export class UpdateOrdensProducaoDto extends PartialType(CreateOrdensProaducaoDto) {}
