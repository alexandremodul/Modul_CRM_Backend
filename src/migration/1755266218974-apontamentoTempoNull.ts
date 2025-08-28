import { MigrationInterface, QueryRunner } from "typeorm";

export class ApontamentoTempoNull1755266218974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE apontamento_tempo
            ALTER COLUMN dt_hr_fim DROP NOT NULL,
            ALTER COLUMN quantidade DROP NOT NULL,
            ALTER COLUMN calcminutos DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE apontamento_tempo
            ALTER COLUMN dt_hr_fim SET NOT NULL,
            ALTER COLUMN quantidade SET NOT NULL,
            ALTER COLUMN calcminutos SET NOT NULL
        `);
    }

}
