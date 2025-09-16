import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDetalhesOrdemProducaoDtPlFimNullable1758041274527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.detalhes_ordem_producao
            ALTER COLUMN dt_pl_fim DROP NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.detalhes_ordem_producao
            ALTER COLUMN dt_pl_fim SET NOT NULL;
        `);
    }

}
