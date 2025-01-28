import { MigrationInterface, QueryRunner } from "typeorm";

export class OrdensProd1737382853711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.ordens_producao (
                id_codigo SERIAL PRIMARY KEY,
                produto VARCHAR(255) NOT NULL,
                armazem INT NOT NULL,
                ord_producao VARCHAR(255) NOT NULL,
                dt_empenho VARCHAR(255) NOT NULL,
                sal_empenho VARCHAR(255),
                sub_lote VARCHAR(255),
                qtd_processo INT,
                tipo_mov VARCHAR(255),
                cod_cat83 VARCHAR(255),
                produto_pai VARCHAR(255),
                roteiro INT NOT NULL,
                operacao VARCHAR(255),
                p_original VARCHAR(255),
                created_at TIMESTAMP DEFAULT now() NOT NULL,
                updated_at TIMESTAMP DEFAULT now() NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.ordens_producao;
        `);
    }
}
