import { MigrationInterface, QueryRunner } from "typeorm";

export class Estruturas1727807122448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.estruturas (
                id_estruturas integer NOT NULL,
                codigo character varying NOT NULL,
                componente character varying NOT NULL,
                quantidade integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id_estruturas)
            );
            
            CREATE SEQUENCE public.estruturas_id_estruturas_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.estruturas_id_estruturas_seq OWNED BY public.estruturas.id_estruturas;
            
            ALTER TABLE ONLY public.estruturas 
                ALTER COLUMN id_estruturas SET DEFAULT nextval('public.estruturas_id_estruturas_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.estruturas;
        `);
    }

}
