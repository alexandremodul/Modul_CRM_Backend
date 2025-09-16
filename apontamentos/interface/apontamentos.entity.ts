import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('apontamentos')
export class Apontamentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ordem_producao: string;

  @Column()
  desc_oper: string;

  @Column()
  qtde: number;

  @Column()
  usr_ap: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdat: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedat: Date;
}
