import { IsString, IsInt, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateApontamentosTempoDto {
  @IsString()
  @IsNotEmpty()
  op: string;

  @IsString()
  @IsNotEmpty()
  item: string;

  @IsString()
  @IsNotEmpty()
  operacao: string;

  @IsDateString()
  @IsNotEmpty()
  dt_hr_inicio: string;

  @IsDateString()
  @IsNotEmpty()
  dt_hr_fim: string; 

  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @IsInt()
  @IsNotEmpty()
  calcminutos: number;

  @IsString()
  @IsNotEmpty()
  usuario: string;
}
