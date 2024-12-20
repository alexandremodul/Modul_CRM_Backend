import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusRevisaoService } from './status_revisao.service';
import { StatusRevisaoController } from './status_revisao.controller';
import { Status_revisao } from './interfaces/status_revisao.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [    JwtModule,  
                TypeOrmModule.forFeature([Status_revisao]),
                forwardRef(() => AuthModule)
              ],
  controllers: [StatusRevisaoController],
  providers: [StatusRevisaoService],
})
export class StatusModuleRevisao {}
