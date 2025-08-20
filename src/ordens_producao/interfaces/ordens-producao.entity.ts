import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('empenhos')
export class OrdensProducao {

  @PrimaryGeneratedColumn()
  id_codigo: number;

  @Column()
  produto: string;

  @Column('int')
  armazem: number;

 @Column({ type: 'varchar', nullable: true })
  ord_producao: string;

  @Column({ type: 'text' })
  dt_empenho: string;

  @Column({ type: 'text', nullable: true })
  sal_empenho?: string;

  @Column({ type: 'text', nullable: true })
  sub_lote?: string;

  @Column('int', { nullable: true })
  qtd_processo?: number;

  @Column({ type: 'varchar', nullable: true })
  tipo_mov?: string;

  @Column({ type: 'varchar', nullable: true })
  cod_cat83?: string;

  @Column({ type: 'varchar', nullable: true })
  produto_pai?: string;

  @Column('int')
  roteiro: number;

  @Column({ type: 'varchar', nullable: true })
  operacao?: string;

  @Column({ type: 'varchar', nullable: true })
  p_original?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
