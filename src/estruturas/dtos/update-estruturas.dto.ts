import { PartialType } from '@nestjs/mapped-types';
import { CreateEstruturasDto } from './create-estruturas.dto';

export class UpdateEstruturasDto extends PartialType(CreateEstruturasDto) {}
