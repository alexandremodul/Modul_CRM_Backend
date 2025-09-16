import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ocorrencias') 
export class Ocorrencia {
  @PrimaryGeneratedColumn()
  id_ocorrencia: number;

  @Column()
  codigo: string;

  @Column()
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_solicitacao: Date;

  @Column()
  usuario_solicitante: string;

  @Column()
  departamento: string;

  @Column({ type: 'text', nullable: true })
  desc_alteracao?: string;

  @Column({ type: 'text', nullable: true })
  bene_alteracao?: string;

  @Column({ type: 'text', nullable: true })
  motivo_alteracao?: string;

  @Column({ nullable: true })
  responsavel_analise?: string;

  @Column({ nullable: true })
  setor_analise?: string;

  @Column({ default: false })
  aprovacao?: boolean;
}
