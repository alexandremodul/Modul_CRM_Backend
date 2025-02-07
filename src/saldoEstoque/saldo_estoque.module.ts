import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaldoEstoque } from './interfaces/saldo_estoque.entity';
import { SaldoEstoqueService } from './saldo_estoque.service';
import { SaldoEstoqueController } from './saldo_estoque.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaldoEstoque])],
  controllers: [SaldoEstoqueController],
  providers: [SaldoEstoqueService],
})
export class SaldoEstoqueModule {}
