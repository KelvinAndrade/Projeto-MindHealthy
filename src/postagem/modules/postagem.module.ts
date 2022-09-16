import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "../controllers/postagem.controller";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";
<<<<<<< HEAD
=======

>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381


@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]

})
export class PostagemModule{}