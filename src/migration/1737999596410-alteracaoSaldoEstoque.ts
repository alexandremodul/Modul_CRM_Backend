import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteracaoSaldoEstoque1737999596410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.saldo_estoque
            ALTER COLUMN produto DROP NOT NULL,
            ALTER COLUMN tipo DROP NOT NULL,
            ALTER COLUMN grupo DROP NOT NULL,
            ALTER COLUMN descricao1 DROP NOT NULL,
            ALTER COLUMN descricao2 DROP NOT NULL,
            ALTER COLUMN unidade DROP NOT NULL,
            ALTER COLUMN filial DROP NOT NULL,
            ALTER COLUMN armazem DROP NOT NULL,
            ALTER COLUMN qtde_1a_u_m DROP NOT NULL,
            ALTER COLUMN di DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE public.saldo_estoque
            ALTER COLUMN produto SET NOT NULL,
            ALTER COLUMN tipo SET NOT NULL,
            ALTER COLUMN grupo SET NOT NULL,
            ALTER COLUMN descricao1 SET NOT NULL,
            ALTER COLUMN descricao2 SET NOT NULL,
            ALTER COLUMN unidade SET NOT NULL,
            ALTER COLUMN filial SET NOT NULL,
            ALTER COLUMN armazem SET NOT NULL,
            ALTER COLUMN qtde_1a_u_m SET NOT NULL,
            ALTER COLUMN di SET NOT NULL
        `);
    }

}
