import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { Temas } from './temas/entities/temas.entity';
import { TemasModule } from './temas/modules/temas.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/modules/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'mysql',
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'root', 
      database: 'db_mindhealthy', 
      entities: [Postagem, Temas, Usuario], 
      synchronize: true 

    }),

    PostagemModule,
    TemasModule,
    UsuarioModule
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}