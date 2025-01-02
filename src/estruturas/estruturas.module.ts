import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstruturasService } from './estruturas.service';
import { EstruturasController } from './estruturas.controller';
import { Estruturas } from './interfaces/estruturas.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [   JwtModule,  TypeOrmModule.forFeature([Estruturas]),forwardRef(() => AuthModule), ],
  controllers: [EstruturasController],
  providers: [EstruturasService],
})
export class EstruturasModule {}
