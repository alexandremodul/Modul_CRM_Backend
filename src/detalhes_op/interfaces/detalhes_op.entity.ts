import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity('detalhes_op')
export class DetalhesOp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    ordem_prod: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    desc_oper: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    dt_planejada: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modified_at: Date;
}