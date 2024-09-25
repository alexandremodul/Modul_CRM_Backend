import { UserEntity } from "../interfaces/user.entity";

export class CreateUserDto {
    name: string;
    email: string;
    password: string; 

    constructor(user: UserEntity) {
        this.name = user.name;
        this.email = user.email;
    }
}

export class deleteUserDto {
        name?: string;
        email?: string;
        password?: string;
}


export class updateUserDto {
    name?: string;
    email?: string;
    password?: string;
}

export class readUserDto {
    name?: string;
    email?: string;
    password?: string;
}
//renomear para user, tirar o create