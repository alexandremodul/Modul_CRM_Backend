import { IsString, IsNotEmpty } from "class-validator";

export class CreateDetalhesOpDto {
    @IsString()
    @IsNotEmpty()
    ordem_prod: string;

    @IsString()
    @IsNotEmpty()
    desc_oper: string;

    @IsString()
    @IsNotEmpty()
    dt_planejada: string;
}