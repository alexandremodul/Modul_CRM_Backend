import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosModuleDetalhe } from './produtos_detalhes/produtos_detalhes.module';
import { ProdutosModuleRevisao } from './produtos_revisao/produtos_revisao.module';
import { StatusModuleRevisao } from './status_revisao/status_revisao.module';
import { RoteirosModule } from './roteiros/roteiros.module';
import { EstruturasModule } from './estruturas/estruturas.module';
import { OcorrenciaModule } from './ocorrencias/ocorrencia.module';
import { RoteirosDetalhesModule } from './roteiros_detalhes/roteiros_detalhes.module';
import { OrdensProducaoModule } from './ordens_producao/ordens-producao.module';
import { OpModule } from './op/op.module';
import { SaldoEstoqueModule } from './saldoEstoque/saldo_estoque.module';
import { DetalhesOpModule } from './detalhes_op/detalhes_op.module';
import { ApontamentosModule } from './apontamentos/apontamentos.module';

@Module({
  imports: [   
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV !== 'production' 
        ? ['.env.development.local', '.env'] // Fallback para .env se .env.development.local não existir
        : '.env', // Carrega o .env em produção, se existir
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        console.log('Database config:', {
          host: process.env.DB_HOST,
          username: process.env.DB_USERNAME,
          database: process.env.DB_DATABASE,
          port: process.env.DB_PORT,
        });
        return {
          type: 'postgres',
          database: process.env.DB_DATABASE,
          host: process.env.DB_HOST,
          password: process.env.DB_PASSWORD,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          entities: [`${__dirname}/**/*.entity{.js,.ts}`],
          migrations: [`${__dirname}/migration/{.ts,*.js}`],
          migrationsRun: true,
        };
      },
    }),
    UserModule,
    AuthModule,
    ProdutosModule,
    ProdutosModuleDetalhe,
    ProdutosModuleRevisao,
    StatusModuleRevisao,
    RoteirosModule,
    EstruturasModule,
    OcorrenciaModule,
    RoteirosDetalhesModule,
    OrdensProducaoModule,
    OpModule,
    SaldoEstoqueModule,
    DetalhesOpModule,
    ApontamentosModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
