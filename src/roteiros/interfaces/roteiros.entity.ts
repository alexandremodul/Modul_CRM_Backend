import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('roteiros')
export class Roteiros {
  @PrimaryGeneratedColumn()
  id_roteiro: number;

  @Column({ type: 'varchar', length: 255 })
  produto: string;

  @Column({ type: 'varchar', length: 255 })
  operacao_descr: string;

  @Column({ type: 'varchar', length: 255 })
  oper_ref_grade: string;


  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
