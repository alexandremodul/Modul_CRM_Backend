import { MigrationInterface, QueryRunner } from "typeorm";

export class ProdutosDetalhes1727807118433 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.produtos_detalhes (
                id_codigo integer NOT NULL,
                codigo character varying NOT NULL,
                versao_desenho_atual character varying(3) NOT NULL,
                status_de_revisao integer NOT NULL, -- Altere aqui para ser um inteiro
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id_codigo),
                CONSTRAINT fk_status_de_revisao FOREIGN KEY (status_de_revisao) REFERENCES public.status_revisao(id) -- Define a chave estrangeira
            );
            
            CREATE SEQUENCE public.produtos_detalhes_id_codigo_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.produtos_detalhes_id_codigo_seq OWNED BY public.produtos_detalhes.id_codigo;
            
            ALTER TABLE ONLY public.produtos_detalhes 
                ALTER COLUMN id_codigo SET DEFAULT nextval('public.produtos_detalhes_id_codigo_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.produtos_detalhes;
        `);
    }
}