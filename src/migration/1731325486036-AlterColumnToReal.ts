import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnToReal1731325486036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      -- Remova a restrição de chave estrangeira temporariamente
      ALTER TABLE produtos_revisao
      DROP CONSTRAINT IF EXISTS fk_status_de_revisao;
      
      -- Altere o tipo da coluna
      ALTER TABLE produtos_revisao
      ALTER COLUMN status_de_revisao TYPE INTEGER;
      
      -- Recrie a restrição de chave estrangeira
      ALTER TABLE produtos_revisao
      ADD CONSTRAINT fk_status_de_revisao FOREIGN KEY (status_de_revisao) REFERENCES status_revisao(id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      -- Remova a restrição de chave estrangeira para reverter o tipo
      ALTER TABLE produtos_revisao
      DROP CONSTRAINT IF EXISTS fk_status_de_revisao;
      
      -- Reverter o tipo de volta para o original
      ALTER TABLE produtos_revisao
      ALTER COLUMN status_de_revisao TYPE character varying;
      
      -- Recrie a restrição de chave estrangeira original
      ALTER TABLE produtos_revisao
      ADD CONSTRAINT fk_status_de_revisao FOREIGN KEY (status_de_revisao) REFERENCES status_revisao(id);
    `);
  }
}
