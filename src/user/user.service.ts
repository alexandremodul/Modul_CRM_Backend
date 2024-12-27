import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './interfaces/user.entity'; 
import { CreateUserDto } from './dtos/createUser.dto';
import { BadRequestException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

  
    async createUser(userData: any) {
        const saltRounds = 10; 
    
        if (!this.isValidEmail(userData.email)) {
            throw new BadRequestException('e-mail incorreto (formato)');
        }
    
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
        
        const newUser = this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });
    
        return this.userRepository.save(newUser);
    }
    
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    } 
//get user by login
    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOneBy({ login });
        if (!user) {
            throw new Error('Não Encontrado');
        }
        return user;
    }


    async getUserById(id: number) {
        const user = await this.userRepository.find({
            where: { id }, 
        });
    
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
    
        return user;
    }
    async updateUser(id: number, updateUserDto: CreateUserDto) {
        const user = await this.userRepository.findOneBy({ id }); 
        if (!user) {
            throw new Error('Não Encontrado');
        }

        Object.assign(user, updateUserDto);

        return this.userRepository.save(user);
    }
    async deleteUser(id: string) {
        const result = await this.userRepository.delete(id);
        console.log(result)
        return { deleted: true };
    }
}
