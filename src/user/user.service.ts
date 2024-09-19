import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './interfaces/user.entity'; 
import { CreateUserDto } from './dtos/createUser.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async createUser(userData: any) {
        const newUser = this.userRepository.create(userData);
        return this.userRepository.save(newUser);
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new Error('Não Encontrado');
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
