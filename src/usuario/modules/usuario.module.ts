import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "../controller/usuario.controller";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Module({
    imports :[TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService],
    controllers:[UsuarioController],
    exports: [TypeOrmModule]

})
export class UsuarioModule{}