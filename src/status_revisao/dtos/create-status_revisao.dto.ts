import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStatusRevisaoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

}
