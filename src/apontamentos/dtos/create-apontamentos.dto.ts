import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateApontamentosDto {
  @IsString()
  @IsNotEmpty()
  ordem_producao: string;

  @IsString()
  @IsNotEmpty()
  desc_oper: string;

  @IsInt()
  @IsNotEmpty()
  qtde: number;

  @IsString()
  @IsNotEmpty()
  usr_ap: string;
}
