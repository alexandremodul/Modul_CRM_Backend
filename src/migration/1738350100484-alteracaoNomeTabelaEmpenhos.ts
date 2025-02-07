import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteracaoNomeTabelaEmpenhos1738350100484 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE IF EXISTS ordens_producao RENAME TO empenhos;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE IF EXISTS ordens_producao RENAME TO empenhos;
        `);
    }
}
