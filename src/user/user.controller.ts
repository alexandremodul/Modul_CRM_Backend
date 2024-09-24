import { Controller, Put, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get(':id')
    async getUser(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
