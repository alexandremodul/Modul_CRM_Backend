import { MigrationInterface, QueryRunner } from "typeorm";

export class Apontamentos1739187722484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.apontamentos (
                id SERIAL PRIMARY KEY,
                ordem_producao VARCHAR NOT NULL,
                desc_oper VARCHAR NOT NULL,
                qtde INTEGER NOT NULL,
                usr_ap VARCHAR NOT NULL,
                createdat TIMESTAMP DEFAULT now() NOT NULL,
                updatedat TIMESTAMP DEFAULT now() NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.apontamentos;
        `);
    }

}

