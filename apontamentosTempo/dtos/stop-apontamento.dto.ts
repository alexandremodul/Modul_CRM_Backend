import { IsDateString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class StopApontamentoDto {
  @IsDateString() @IsNotEmpty()
  dt_hr_fim: string; 

  @IsOptional() @IsNumber() @Min(0)
  quantidade?: number; 
}