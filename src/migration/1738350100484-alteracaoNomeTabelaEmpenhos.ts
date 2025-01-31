import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteracaoNomeTabelaEmpenhos1738350100484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE op RENAME TO empenhos');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE empenhos RENAME TO op');
    }

}
