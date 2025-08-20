    import { MigrationInterface, QueryRunner } from "typeorm";

export class AdcStatus1755171378514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.detalhes_op
        ADD COLUMN IF NOT EXISTS dt_fim VARCHAR,
        ADD COLUMN IF NOT EXISTS status VARCHAR;
    `);

    await queryRunner.query(`
      UPDATE public.detalhes_op
      SET status = 'pendente'
      WHERE status IS NULL;
    `);

    await queryRunner.query(`
      ALTER TABLE public.detalhes_op
        ALTER COLUMN status SET DEFAULT 'pendente',
        ALTER COLUMN status SET NOT NULL;
    `);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE public.detalhes_op
        DROP COLUMN IF EXISTS dt_fim,
        DROP COLUMN IF EXISTS status;
    `);
  }
}
