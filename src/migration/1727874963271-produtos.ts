import { MigrationInterface, QueryRunner } from "typeorm";

export class Produtos1727807163357 implements MigrationInterface {
// mata010
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.produtos (
                id_codigo integer NOT NULL,
                codigo character varying NOT NULL,
                descricao text,
                tipo character varying NOT NULL,
                unidade character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
               updated_at timestamp without time zone DEFAULT now() NOT NULL, 
                primary key (id_codigo)
            );
            
            CREATE SEQUENCE public.produtos_id_codigo_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.produtos_id_codigo_seq OWNED BY public.produtos.id_codigo;
            
            ALTER TABLE ONLY public.produtos 
                ALTER COLUMN id_codigo SET DEFAULT nextval('public.produtos_id_codigo_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.produtos;
        `);
    }

}
