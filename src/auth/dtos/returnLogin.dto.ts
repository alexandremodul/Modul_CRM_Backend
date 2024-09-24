import { CreateUserDto } from "src/user/dtos/createUser.dto";

export interface ReturnLogin{
    user: CreateUserDto;
    accessToken: string
}