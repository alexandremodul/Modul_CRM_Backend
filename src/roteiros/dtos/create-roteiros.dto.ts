import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRoteiroDto {
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsString()
  @IsNotEmpty()
  operacao_descr: string;

  @IsString()
  @IsNotEmpty()
  oper_ref_grade: string;

}

