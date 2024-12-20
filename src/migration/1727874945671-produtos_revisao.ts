import { MigrationInterface, QueryRunner } from "typeorm";

export class ProdutosRevisao1727807136755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.produtos_revisao (
                id_codigo integer NOT NULL,
                codigo character varying NOT NULL,
                versao_desenho character varying(3) NOT NULL,
                status_de_revisao character varying NOT NULL,
                usuario_revisor integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id_codigo)
            );
            
            CREATE SEQUENCE public.produtos_revisao_id_codigo_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.produtos_revisao_id_codigo_seq OWNED BY public.produtos_revisao.id_codigo;
            
            ALTER TABLE ONLY public.produtos_revisao 
                ALTER COLUMN id_codigo SET DEFAULT nextval('public.produtos_revisao_id_codigo_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.produtos_revisao;
        `);
    }

}