import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterarRoteirosDesc1735912262471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.roteiros
            DROP COLUMN descr;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.roteiros
            ADD COLUMN descr character varying;
        `);
    }
}
