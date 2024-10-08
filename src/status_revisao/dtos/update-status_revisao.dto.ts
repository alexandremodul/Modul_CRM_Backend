import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusRevisaoDto } from './create-status_revisao.dto';

export class UpdateStatusRevisaoDto extends PartialType(CreateStatusRevisaoDto) {}
