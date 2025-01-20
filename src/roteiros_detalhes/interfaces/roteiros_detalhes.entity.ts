import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('roteiros_detalhes')
export class Roteiros_detalhes {
  @PrimaryGeneratedColumn()
  id_roteiro_detalhes: number;

  @Column({ type: 'integer' })
  produto_id: number;

  @Column({ type: 'varchar', length: 255 })
  operacao_descr: string;

  @Column({ type: 'varchar', length: 255 })
  tempo: string;


  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
