import { UserEntity } from "src/user/interfaces/user.entity";

export class LoginPayload{
    id:number;
    typeUser:number

    constructor(user: UserEntity){
        this.id = user.id
        this.typeUser = user.type_user
    }

}