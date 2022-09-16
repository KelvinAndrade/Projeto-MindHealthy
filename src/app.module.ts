import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { Temas } from './temas/entities/temas.entity';
import { TemasModule } from './temas/modules/temas.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/modules/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({

      /*type: 'mysql',
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'root', 
      database: 'db_mindhealthy', 
      entities: [Postagem, Temas, Usuario], 
      synchronize: true*/

      type: 'postgres',
      host: process.env.DATABASE_URL,      
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
      synchronize: true
    }),

    PostagemModule,
    TemasModule,
    UsuarioModule
    
    ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}//check :)
