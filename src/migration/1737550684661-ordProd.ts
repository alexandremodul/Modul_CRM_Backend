import { MigrationInterface, QueryRunner } from "typeorm";

export class OrdProd1737550684661 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.op (
                id integer NOT NULL,
                filial character varying,
                numero_op character varying,
                item character varying,
                sequencia character varying,
                produto character varying,
                armazem character varying,
                centro_custo character varying,
                quantidade character varying,
                unid_medida character varying,
                previsao_ini character varying,
                entrega character varying,
                observacao text,
                dt_emissao character varying DEFAULT now(),
                prioridade character varying,
                qtd_produzida character varying,
                dt_real_fim character varying,
                situacao character varying,
                segunda_unidade_medida character varying,
                tipo_op character varying,
                dias_ociosos character varying,
                pedido_venda character varying,
                item_pv character varying,
                opcional_op character varying DEFAULT false,
                qtd_segunda_um character varying,
                created_at timestamp without time zone DEFAULT now(),
                updated_at timestamp without time zone DEFAULT now(),
                primary key (id)
            );

            CREATE SEQUENCE public.op_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.op_id_seq OWNED BY public.op.id;

            ALTER TABLE ONLY public.op
                ALTER COLUMN id SET DEFAULT nextval('public.op_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.op;
        `);
    }
}
