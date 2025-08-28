import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDetalhesOrdemProducaoDto {
  @IsString()
  @IsNotEmpty()
  op: string;

  @IsString()
  @IsNotEmpty()
  dt_pl_inicio: string;

  @IsString()
  @IsNotEmpty()
  dt_pl_fim: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
