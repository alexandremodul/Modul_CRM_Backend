import { MigrationInterface, QueryRunner } from "typeorm";

export class StatusRevisao1727807149532 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.status_revisao (
                id integer NOT NULL,
                descricao character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL, 
                primary key (id)
            );
            
            CREATE SEQUENCE public.status_revisao_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.status_revisao_id_seq OWNED BY public.status_revisao.id;
            
            ALTER TABLE ONLY public.status_revisao 
                ALTER COLUMN id SET DEFAULT nextval('public.status_revisao_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.status_revisao;
        `);
    }
}
