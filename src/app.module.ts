import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
