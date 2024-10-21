import { Body, Post, Controller} from '@nestjs/common';
import {readUserDto} from "../user/dtos/createUser.dto"
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { ReturnLogin } from './dtos/returnLogin.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post()
    async login(@Body() loginDto: LoginDto): Promise<ReturnLogin> {
        return await this.authService.login(loginDto);
      }
}
