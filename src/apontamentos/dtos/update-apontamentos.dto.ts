import { PartialType } from '@nestjs/mapped-types';
import { CreateApontamentosDto } from './create-apontamentos.dto';

export class UpdateApontamentosDto extends PartialType(CreateApontamentosDto) {}
