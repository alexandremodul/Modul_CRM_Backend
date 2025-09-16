import { MigrationInterface, QueryRunner } from "typeorm";

export class DetalhesOrdemProducaoDTINICIO1758045612837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`
            ALTER TABLE public.detalhes_ordem_producao
            ALTER COLUMN dt_pl_inicio DROP NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
               await queryRunner.query(`
            ALTER TABLE public.detalhes_ordem_producao
            ALTER COLUMN dt_pl_inicio SET NOT NULL;
        `);
    }

}
