import { PartialType } from '@nestjs/mapped-types';
import { CreateSaldoEstoqueDto } from './create_saldo_estoque.dtos';

export class UpdateSaldoEstoqueDto extends PartialType(CreateSaldoEstoqueDto) {}
