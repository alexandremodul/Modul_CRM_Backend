// create-ocorrencia.dto.ts

import { IsString, IsOptional, IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class CreateOcorrenciaDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsDate()
  data_solicitacao: Date;

  @IsString()
  @IsNotEmpty()
  usuario_solicitante: string;

  @IsString()
  @IsNotEmpty()
  departamento: string;

  @IsOptional()
  @IsString()
  desc_alteracao?: string;

  @IsOptional()
  @IsString()
  bene_alteracao?: string;

  @IsOptional()
  @IsString()
  motivo_alteracao?: string;

  @IsOptional()
  @IsString()
  responsavel_analise?: string;

  @IsOptional()
  @IsString()
  setor_analise?: string;

  @IsOptional()
  @IsBoolean()
  aprovacao?: boolean;
}
