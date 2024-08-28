import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    async getallusers(){
        return JSON.stringify({ teste: 'abc'})
    }

}
