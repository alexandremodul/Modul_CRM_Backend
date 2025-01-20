import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRoteirosDetalhesDto {
  @IsString()
  @IsNotEmpty()
  produto_id: number;

  @IsString()
  @IsNotEmpty()
  operacao_descr: string;

  @IsString()
  @IsNotEmpty()
  tempo: string;

 
}
