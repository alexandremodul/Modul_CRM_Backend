import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarItemOp1740158565797 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.op
            ALTER COLUMN item TYPE INT USING item::INTEGER;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.op
            ALTER COLUMN item TYPE CHARACTER VARYING;
        `);
    }
}
