import { MigrationInterface, QueryRunner } from "typeorm";

export class ApontamentoTempo1755171752674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.apontamento_tempo (
        id SERIAL PRIMARY KEY,
        op VARCHAR NOT NULL,
        item VARCHAR NOT NULL,
        operacao VARCHAR NOT NULL,
        dt_hr_inicio TIMESTAMP NOT NULL,
        dt_hr_fim TIMESTAMP NOT NULL,
        quantidade NUMERIC NOT NULL,
        calcminutos INTEGER NOT NULL,
        usuario VARCHAR NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        modified_at TIMESTAMP NOT NULL DEFAULT now()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE public.apontamento_tempo;
    `);
  }
}
