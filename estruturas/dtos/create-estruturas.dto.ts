import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEstruturasDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  componente: string;

  // @IsString()
  @IsNotEmpty()
  quantidade: number;

}

