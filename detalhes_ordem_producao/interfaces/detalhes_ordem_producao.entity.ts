import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('detalhes_ordem_producao')
export class DetalhesOrdemProducao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'op' })
  op: string;

  @Column({ name: 'dt_pl_inicio' })
  dt_pl_inicio: string; 

  @Column({ name: 'dt_pl_fim' })
  dt_pl_fim: string; 

  @Column({ name: 'status' })
  status: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp' })
  modified_at: Date;
}
