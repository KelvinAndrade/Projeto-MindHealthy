import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { PostagemModule } from "./postagem/modules/postagem.module";
import { TemasModule } from "./temas/modules/temas.module";
import { UsuarioModule } from "./usuario/modules/usuario.module";

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
      synchronize: true,
      autoLoadEntities: true
      
    }),

    PostagemModule,
    TemasModule,
    UsuarioModule
    
    ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}//check :)
