import { MigrationInterface, QueryRunner } from "typeorm";

export class alterarQuantidade1735910264987 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.estruturas
            ALTER COLUMN quantidade TYPE numeric;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.estruturas
            ALTER COLUMN quantidade TYPE integer USING quantidade::integer;
        `);
    }
}
