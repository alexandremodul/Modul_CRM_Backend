import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateOpDto {
  
  @IsString()
  @IsNotEmpty()
  filial: string;

  @IsString()
  @IsNotEmpty()
  numero_op: string;

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
  centro_custo: string;

  @IsString()
  @IsNotEmpty()
  quantidade: string;

  @IsString()
  @IsNotEmpty()
  unid_medida: string;

  @IsString()
  @IsNotEmpty()
  previsao_ini: string;

  @IsString()
  @IsNotEmpty()
  entrega: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsString()
  dt_emissao?: string;

  @IsOptional()
  @IsString()
  prioridade?: string;

  @IsOptional()
  @IsString()
  qtd_produzida?: string;

  @IsOptional()
  @IsString()
  dt_real_fim?: string;

  @IsString()
  @IsNotEmpty()
  situacao: string;

  @IsOptional()
  @IsString()
  segundaUnidadeMedida?: string;

  @IsString()
  @IsNotEmpty()
  tipo_op: string;

  @IsOptional()
  @IsString()
  dias_ociosos?: string;

  @IsOptional()
  @IsString()
  pedido_venda?: string;

  @IsOptional()
  @IsString()
  item_pv?: string;

  @IsOptional()
  @IsString()
  opcional_op?: string;

  @IsOptional()
  @IsString()
  qtd_segunda_um?: string;

  @IsOptional()
  @IsString()
  op?: string;
}
