import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "../controller/usuario.controller";
import { UsuarioService } from "../services/usuario.service";

@Module({
    imports :[TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService],
    controllers:[UsuarioController],
    exports: [TypeOrmModule]
})
export class UsuarioModule{}