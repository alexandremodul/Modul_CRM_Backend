import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('produtos_detalhes')
export class Produto {
  @PrimaryGeneratedColumn()
  id_codigo: number;

  @Column({ type: 'varchar', length: 255 })
  codigo: string;

  @Column({ type: 'varchar', length: 255 })
  versao_desenho_atual: string;

  @Column({ type: 'varchar', length: 255 })
  status_de_revisao: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
