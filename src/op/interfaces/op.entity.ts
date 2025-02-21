import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('op')
export class Op {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filial: string;

  @Column()
  numero_op: string;

  @Column()
  item: number;

  @Column()
  sequencia: string;

  @Column()
  produto: string;

  @Column()
  armazem: string;

  @Column()
  centro_custo: string;

  @Column()
  quantidade: string;

  @Column()
  unid_medida: string;

  @Column()
  previsao_ini: string;

  @Column()
  entrega: string;

  @Column({ type: 'text', nullable: true })
  observacao?: string;

  @Column({ type: 'text', nullable: true })
  dt_emissao?: string;

  @Column({ type: 'text', nullable: true })
  prioridade?: string;

  @Column({ type: 'text', nullable: true })
  qtd_produzida?: string;

  @Column({ type: 'text', nullable: true })
  dt_real_fim?: string;

  @Column()
  situacao: string;

  @Column({ type: 'text', nullable: true })
  segunda_unidade_medida?: string;

  @Column()
  tipo_op: string;

  @Column({ type: 'text', nullable: true })
  dias_ociosos?: string;

  @Column({ type: 'text', nullable: true })
  pedido_venda?: string;

  @Column({ type: 'text', nullable: true })
  item_pv?: string;

  @Column({ type: 'text', nullable: true })
  opcional_op?: string;

  @Column({ type: 'text', nullable: true })
  qtd_segunda_um?: string;
  @Column({ type: 'text', nullable: true })
  op?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
