import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({//Vai ter o que é necessario pra se conectar com o DB

      type: 'mysql', //Definindo objeto do tipo mysql

      host: 'localhost', //Definindo que o host é o localhost

      port: 3306, //Definindo a posta do local host (Porta padrão)

      username: 'root', //Definindo o username do mysql

      password: 'root', //Senha padrão DB

      database: 'db_projeto', //Nome da tabela que criamos

      entities: [Postagem], //Criando o TB tarefa

      synchronize: true //Sincroniza todos os dados e alterações no DB

      //Com essas informações é possivel se conectar com o BD

    }),
    
    PostagemModule

    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
