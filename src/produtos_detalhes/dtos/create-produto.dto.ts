import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  versao_desenho_atual: string;

  @IsString()
  @IsNotEmpty()
  status_de_revisao: string;

 
}
