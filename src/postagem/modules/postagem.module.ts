import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],//Esta criando a tabela, passando a entidade da Classe Tarefa
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]

})
export class PostagemModule{}