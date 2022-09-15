import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
<<<<<<< HEAD
import { Usuario } from "../entities/usuario.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Usuario])], 
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]

=======
import { Usuario } from "../controller/usuario.controller";
import { UsuarioService } from "../services/usuario.service";

@Module({
    imports :[TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService],
    controllers:[UsuarioController],
    exports: [TypeOrmModule]
>>>>>>> f356ca3f796ad6115f20f3c12a975f124ee00cc5
})
export class UsuarioModule{}