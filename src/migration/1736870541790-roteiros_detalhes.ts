import { MigrationInterface, QueryRunner } from "typeorm";

export class RoteirosDetalhes1736870541790 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.roteiros_detalhes (
                id_roteiro_detalhes integer NOT NULL,
                produto_id character varying NOT NULL,
                operacao_descr character varying NOT NULL,
                tempo character varying(4), -- Limite o campo para 2-4 números
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id_roteiro_detalhes)
            );
            
            CREATE SEQUENCE public.roteiros_detalhes_id_roteiro_detalhes_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.roteiros_detalhes_id_roteiro_detalhes_seq OWNED BY public.roteiros_detalhes.id_roteiro_detalhes;
            
            ALTER TABLE ONLY public.roteiros_detalhes 
                ALTER COLUMN id_roteiro_detalhes SET DEFAULT nextval('public.roteiros_detalhes_id_roteiro_detalhes_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.roteiros_detalhes;
            DROP SEQUENCE public.roteiros_detalhes_id_roteiro_detalhes_seq;
        `);
    }
}
