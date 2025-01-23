import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateOpDto {
  
  @IsString()
  @IsNotEmpty()
  filial: string;

  @IsString()
  @IsNotEmpty()
  numeroOp: string;

  @IsString()
  @IsNotEmpty()
  item: string;

  @IsString()
  @IsNotEmpty()
  sequencia: string;

  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsString()
  @IsNotEmpty()
  armazem: string;

  @IsString()
  @IsNotEmpty()
  centroCusto: string;

  @IsString()
  @IsNotEmpty()
  quantidade: string;

  @IsString()
  @IsNotEmpty()
  unidMedida: string;

  @IsString()
  @IsNotEmpty()
  previsaoIni: string;

  @IsString()
  @IsNotEmpty()
  entrega: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsString()
  dtEmissao?: string;

  @IsOptional()
  @IsString()
  prioridade?: string;

  @IsOptional()
  @IsString()
  qtdProduzida?: string;

  @IsOptional()
  @IsString()
  dtRealFim?: string;

  @IsString()
  @IsNotEmpty()
  situacao: string;

  @IsOptional()
  @IsString()
  segundaUnidadeMedida?: string;

  @IsString()
  @IsNotEmpty()
  tipoOp: string;

  @IsOptional()
  @IsString()
  diasOciosos?: string;

  @IsOptional()
  @IsString()
  pedidoVenda?: string;

  @IsOptional()
  @IsString()
  itemPv?: string;

  @IsOptional()
  @IsString()
  opcionalOp?: string;

  @IsOptional()
  @IsString()
  qtdSegundaUm?: string;
}
