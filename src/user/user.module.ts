import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity'; 
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [
    JwtModule,  
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => AuthModule), 
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], 
})
export class UserModule {}
