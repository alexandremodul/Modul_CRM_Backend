import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSaldoEstoqueDto {
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  grupo: string;

  @IsString()
  @IsNotEmpty()
  descricao1: string;

  @IsString()
  @IsNotEmpty()
  descricao2: string;

  @IsString()
  @IsNotEmpty()
  unidade: string;

  @IsString()
  @IsNotEmpty()
  filial: string;

  @IsString()
  @IsNotEmpty()
  armazem: string;

  @IsString()
  @IsNotEmpty()
  qtde_1a_u_m: string;

  @IsString()
  @IsNotEmpty()
  di: string;

 
}
