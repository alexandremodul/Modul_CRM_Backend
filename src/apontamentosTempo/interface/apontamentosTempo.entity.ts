
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'apontamento_tempo' })
export class ApontamentosTempo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  op: string;

  @Column()
  item: string;

  @Column()
  operacao: string;

  @Column({ type: 'timestamptz' })
  dt_hr_inicio: Date;

  @Column({ type: 'timestamptz', nullable: true })
  dt_hr_fim: Date | null;

  @Column({ type: 'int', nullable: true })
  quantidade: number | null;

  @Column({ type: 'int', nullable: true })
  calcminutos: number | null;

  @Column()
  usuario: string;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  created_at: Date;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  modified_at: Date;
}
