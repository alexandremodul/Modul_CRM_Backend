import { MigrationInterface, QueryRunner } from "typeorm";

export class Ocorrencias1732187998401 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.ocorrencias (
                id_ocorrencia integer NOT NULL,
                codigo character varying NOT NULL,
                descricao character varying NOT NULL,
                data_solicitacao timestamp without time zone DEFAULT now() NOT NULL,
                usuario_solicitante character varying NOT NULL,
                departamento character varying NOT NULL,
                desc_alteracao text,
                bene_alteracao text,
                motivo_alteracao text,
                responsavel_analise character varying,
                setor_analise character varying,
                aprovacao boolean DEFAULT false,
                primary key (id_ocorrencia)
            );

            CREATE SEQUENCE public.ocorrencias_id_ocorrencia_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.ocorrencias_id_ocorrencia_seq OWNED BY public.ocorrencias.id_ocorrencia;

            ALTER TABLE ONLY public.ocorrencias 
                ALTER COLUMN id_ocorrencia SET DEFAULT nextval('public.ocorrencias_id_ocorrencia_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE public.ocorrencias;
        `);
    }
}
