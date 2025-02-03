import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalhesOpDto } from './create-detalhes_op.dto';

export class UpdateDetalhesOpDto extends PartialType(CreateDetalhesOpDto) {}
