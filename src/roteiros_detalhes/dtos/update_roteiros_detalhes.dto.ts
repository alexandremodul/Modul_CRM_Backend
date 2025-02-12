import { PartialType } from '@nestjs/mapped-types';
import { CreateRoteirosDetalhesDto } from './create_roteiros_detalhes.dto';

export class UpdateProdutoDto extends PartialType(CreateRoteirosDetalhesDto) {}
