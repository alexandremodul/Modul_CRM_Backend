import { MigrationInterface, QueryRunner } from "typeorm";

export class OrdProd1737550684661 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.ord_prod (
                id integer NOT NULL,
                filial character varying NOT NULL,
                numero_op character varying NOT NULL,
                item character varying NOT NULL,
                sequencia character varying NOT NULL,
                produto character varying NOT NULL,
                armazem character varying NOT NULL,
                centro_custo character varying NOT NULL,
                quantidade numeric NOT NULL,
                unid_medida character varying NOT NULL,
                previsao_ini timestamp without time zone NOT NULL,
                entrega timestamp without time zone NOT NULL,
                observacao text,
                dt_emissao timestamp without time zone DEFAULT now() NOT NULL,
                prioridade integer,
                qtd_produzida numeric,
                dt_real_fim timestamp without time zone,
                situacao character varying NOT NULL,
                segunda_unidade_medida numeric,
                tipo_op character varying NOT NULL,
                dias_ociosos integer,
                pedido_venda character varying,
                item_pv character varying,
                opcional_op boolean DEFAULT false,
                qtd_segunda_um numeric,
                primary key (id)
            );

            CREATE SEQUENCE public.ord_prod_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.ord_prod_id_seq OWNED BY public.ord_prod.id;

            ALTER TABLE ONLY public.ord_prod 
                ALTER COLUMN id SET DEFAULT nextval('public.ord_prod_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.ord_prod;
        `);
    }
}
