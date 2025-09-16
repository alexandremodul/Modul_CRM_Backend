import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('estruturas')
export class Estruturas {
  @PrimaryGeneratedColumn()
  id_estruturas: number;

  @Column({ type: 'varchar', length: 255 })
  codigo: string;

  @Column({ type: 'varchar', length: 255 })
  componente: string;

  @Column({ type: 'integer'})
  quantidade: number;


  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
