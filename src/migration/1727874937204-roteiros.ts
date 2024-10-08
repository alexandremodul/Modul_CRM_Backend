import { MigrationInterface, QueryRunner } from "typeorm";

export class Roteiros1727807125546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.roteiros (
                id_roteiro integer NOT NULL,
                produto character varying NOT NULL,
                operacao_descr character varying NOT NULL,
                oper_ref_grade character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id_roteiro)
            );
            
            CREATE SEQUENCE public.roteiros_id_roteiro_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.roteiros_id_roteiro_seq OWNED BY public.roteiros.id_roteiro;
            
            ALTER TABLE ONLY public.roteiros 
                ALTER COLUMN id_roteiro SET DEFAULT nextval('public.roteiros_id_roteiro_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.roteiros;
        `);
    }

}
