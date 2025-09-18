import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueConstraintToOp1758205000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.detalhes_ordem_producao
      ALTER COLUMN op SET NOT NULL;
    `);

    await queryRunner.query(`
      ALTER TABLE public.detalhes_ordem_producao
      ADD CONSTRAINT detalhes_ordem_producao_op_unique UNIQUE (op);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.detalhes_ordem_producao
      DROP CONSTRAINT detalhes_ordem_producao_op_unique;
    `);

    await queryRunner.query(`
      ALTER TABLE public.detalhes_ordem_producao
      ALTER COLUMN op DROP NOT NULL;
    `);
  }
}
