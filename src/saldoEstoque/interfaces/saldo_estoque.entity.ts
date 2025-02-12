import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('saldo_estoque')
export class SaldoEstoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  produto: string;

  @Column({ type: 'varchar', length: 255 })
  tipo: string;

  @Column({ type: 'varchar', length: 255 })
  grupo: string;

  @Column({ type: 'varchar', length: 255 })
  descricao1: string;

  @Column({ type: 'varchar', length: 255 })
  descricao2: string;

  @Column({ type: 'varchar', length: 255 })
  unidade: string;

  @Column({ type: 'varchar', length: 255 })
  filial: string;

  @Column({ type: 'varchar', length: 255 })
  armazem: string;

  @Column({ type: 'varchar', length: 255 })
  qtde_1a_u_m: string;

  @Column({ type: 'varchar', length: 255 })
  di: string;


  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
