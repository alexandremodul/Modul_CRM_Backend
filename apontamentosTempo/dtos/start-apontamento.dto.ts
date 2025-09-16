
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class StartApontamentoDto {
  @IsString() @IsNotEmpty()
  op: string;

  @IsString() @IsNotEmpty()
  item: string;

  @IsString() @IsNotEmpty()
  operacao: string;

  @IsDateString() @IsNotEmpty()
  dt_hr_inicio: string; 

  @IsString() @IsNotEmpty()
  usuario: string;
}
