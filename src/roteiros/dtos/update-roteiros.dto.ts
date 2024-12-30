import { PartialType } from '@nestjs/mapped-types';
import { CreateRoteiroDto } from './create-roteiros.dto';

export class UpdateRoteiroDto extends PartialType(CreateRoteiroDto) {}
     