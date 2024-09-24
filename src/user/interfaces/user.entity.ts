import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false  })
  email: string;

  @Column({ name: 'login', nullable: false  })
  login: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'type_user', type:'int', nullable: false })
  type_user: number;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
  
  @CreateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}