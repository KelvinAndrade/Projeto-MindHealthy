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

<<<<<<< HEAD
      /*type: 'mysql',//Definindo objeto do tipo mysql

      host: 'localhost', //Definindo que o host é o localhost

      port: 3306, //Definindo a pasta do local host (Porta padrão)

      username: 'root', //Definindo o username do mysql

      password: 'root', //Senha padrão DB

      database: 'db_mindhealthy', //Nome da tabela que criamos

      entities: [Postagem, Temas, Usuario], //Criando o TB tarefa

      synchronize: true //Sincroniza todos os dados e alterações no DB*/
=======
      type: 'mysql',
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'root', 
      database: 'db_mindhealthy', 
      entities: [Postagem, Temas, Usuario], 
      synchronize: true 
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381

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
<<<<<<< HEAD

=======
    
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}