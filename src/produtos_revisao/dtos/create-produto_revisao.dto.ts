import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProdutoRevisaoDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  versao_desenho: string;

  @IsString()
  @IsNotEmpty()
  status_de_revisao: string;

 
  @IsString()
  @IsNotEmpty()
  usuario_revisor: number;

}
