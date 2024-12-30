import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoteirosService } from './roteiros.service';
import { RoteirosController } from './roteiros.controller';
import { Roteiros } from './interfaces/roteiros.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [JwtModule,TypeOrmModule.forFeature([Roteiros]), forwardRef(()=> AuthModule)],
  controllers: [RoteirosController],
  providers: [RoteirosService],
})
export class RoteirosModule {}
