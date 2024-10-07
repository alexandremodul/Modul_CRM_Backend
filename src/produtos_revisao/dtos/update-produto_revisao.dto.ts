import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoRevisaoDto } from './create-produto_revisao.dto';

export class UpdateProdutoRevisaoDto extends PartialType(CreateProdutoRevisaoDto) {}
