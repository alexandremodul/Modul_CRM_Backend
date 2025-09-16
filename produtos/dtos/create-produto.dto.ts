import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  unidade: string;
}
