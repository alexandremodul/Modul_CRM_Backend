import { MigrationInterface, QueryRunner } from "typeorm";

export class SaldoEstoque1737984856534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.saldo_estoque (
                id SERIAL PRIMARY KEY,
                produto VARCHAR(255) NOT NULL,
                tipo VARCHAR(255) NOT NULL,
                grupo VARCHAR(255) NOT NULL,
                descricao1 VARCHAR(255) NOT NULL,
                descricao2 VARCHAR(255) NOT NULL,
                unidade VARCHAR(255) NOT NULL,
                filial VARCHAR(255) NOT NULL,
                armazem VARCHAR(255) NOT NULL,
                qtde_1a_u_m VARCHAR(255) NOT NULL,
                di VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT now() NOT NULL,
                updated_at TIMESTAMP DEFAULT now() NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.saldo_estoque;
        `);
    }
}
