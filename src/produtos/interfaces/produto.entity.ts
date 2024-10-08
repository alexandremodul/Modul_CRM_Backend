import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id_codigo: number;

  @Column({ type: 'varchar', length: 255 })
  codigo: string;

  @Column({ type: 'varchar', length: 255 })
  descricao: string;

  @Column({ type: 'varchar', length: 255 })
  tipo: string;

  @Column({ type: 'varchar', length: 255 })
  unidade: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
