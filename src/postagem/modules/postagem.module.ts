import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "src/postagem/controller/postagem.controller";
import { PostagemService } from "src/postagem/service/postagem.service";
import { Postagem } from "../entities/postagem.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],//Esta criando a tabela, passando a entidade da Classe Tarefa
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]

})
export class PostagemModule{}