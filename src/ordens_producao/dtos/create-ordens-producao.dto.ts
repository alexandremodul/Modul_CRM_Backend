import { IsString, IsOptional, IsInt, IsDate, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateOrdensProaducaoDto {

  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsInt()
  armazem: number;

  @IsString()
  @IsNotEmpty()
  ord_producao: string;

  @IsString()
  dt_empenho: string;

  @IsOptional()
  @IsString()
  sal_empenho?: string;

  @IsOptional()
  @IsString()
  sub_lote?: string;

  @IsOptional()
  @IsInt()
  qtd_processo?: number;

  @IsOptional()
  @IsString()
  tipo_mov?: string;

  @IsOptional()
  @IsString()
  cod_cat83?: string;

  @IsOptional()
  @IsString()
  produto_pai?: string;

  @IsInt()
  roteiro: number;

  @IsOptional()
  @IsString()
  operacao?: string;

  @IsOptional()
  @IsString()
  p_original?: string;


}
