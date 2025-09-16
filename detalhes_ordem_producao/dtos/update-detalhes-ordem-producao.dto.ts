import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalhesOrdemProducaoDto } from './create-detalhes-ordem-producao.dto';

export class UpdateDetalhesOrdemProducaoDto extends PartialType(CreateDetalhesOrdemProducaoDto) {}
