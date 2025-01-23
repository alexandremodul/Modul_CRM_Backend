import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('op')
export class Op {

  @PrimaryGeneratedColumn()
  id_codigo: number;

  @Column()
  filial: string;

  @Column()
  numeroOp: string;

  @Column()
  item: string;

  @Column()
  sequencia: string;

  @Column()
  produto: string;

  @Column()
  armazem: string;

  @Column()
  centroCusto: string;

  @Column()
  quantidade: string;

  @Column()
  unidMedida: string;

  @Column()
  previsaoIni: string;

  @Column()
  entrega: string;

  @Column({ type: 'text', nullable: true })
  observacao?: string;

  @Column({ type: 'text', nullable: true })
  dtEmissao?: string;

  @Column({ type: 'text', nullable: true })
  prioridade?: string;

  @Column({ type: 'text', nullable: true })
  qtdProduzida?: string;

  @Column({ type: 'text', nullable: true })
  dtRealFim?: string;

  @Column()
  situacao: string;

  @Column({ type: 'text', nullable: true })
  segundaUnidadeMedida?: string;

  @Column()
  tipoOp: string;

  @Column({ type: 'text', nullable: true })
  diasOciosos?: string;

  @Column({ type: 'text', nullable: true })
  pedidoVenda?: string;

  @Column({ type: 'text', nullable: true })
  itemPv?: string;

  @Column({ type: 'text', nullable: true })
  opcionalOp?: string;

  @Column({ type: 'text', nullable: true })
  qtdSegundaUm?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
