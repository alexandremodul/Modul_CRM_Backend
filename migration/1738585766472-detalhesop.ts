import { MigrationInterface, QueryRunner } from "typeorm";

export class Detalhesop1738585766472 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.detalhes_op (
                id SERIAL PRIMARY KEY,
                ordem_prod VARCHAR NOT NULL,
                desc_oper VARCHAR NOT NULL,
                dt_planejada VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT now() NOT NULL,
                modified_at TIMESTAMP DEFAULT now() NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.detalhes_op;
        `);
    }
}
