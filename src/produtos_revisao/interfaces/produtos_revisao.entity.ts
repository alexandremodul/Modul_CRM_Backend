import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('produtos_revisao')
export class Produtos_revisao {
  @PrimaryGeneratedColumn()
  id_codigo: number;

  @Column({ type: 'varchar', length: 255 })
  codigo: string;

  @Column({ type: 'varchar', length: 255 })
  versao_desenho: string;

  @Column({ type: 'varchar', length: 255 })
  status_de_revisao: string;
  
  @Column({ type: 'int',  })
  usuario_revisor: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
