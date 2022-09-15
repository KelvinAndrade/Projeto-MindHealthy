import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "../controller/postagem.controller";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],//Esta criando a tabela, passando a entidade da Classe Tarefa
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]

})
export class PostagemModule{}