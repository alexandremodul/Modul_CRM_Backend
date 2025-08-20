import { MigrationInterface, QueryRunner } from "typeorm";

export class DetalhesOrdemProducao1755171701690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`
            CREATE TABLE public.detalhes_ordem_producao (
                id SERIAL PRIMARY KEY,
                op VARCHAR NOT NULL,
                dt_pl_inicio VARCHAR NOT NULL,
                dt_pl_fim VARCHAR NOT NULL,
                status VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT now() NOT NULL,
                modified_at TIMESTAMP DEFAULT now() NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            DROP TABLE public.detalhes_ordem_producao;
        `);
    }

}
