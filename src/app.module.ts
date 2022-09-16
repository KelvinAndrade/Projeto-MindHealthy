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
    TypeOrmModule.forRoot({//Vai ter o que é necessario pra se conectar com o DB

      /*type: 'mysql',//Definindo objeto do tipo mysql

      host: 'localhost', //Definindo que o host é o localhost

      port: 3306, //Definindo a pasta do local host (Porta padrão)

      username: 'root', //Definindo o username do mysql

      password: 'root', //Senha padrão DB

      database: 'db_mindhealthy', //Nome da tabela que criamos

      entities: [Postagem, Temas, Usuario], //Criando o TB tarefa

      synchronize: true //Sincroniza todos os dados e alterações no DB*/

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
export class AppModule {}