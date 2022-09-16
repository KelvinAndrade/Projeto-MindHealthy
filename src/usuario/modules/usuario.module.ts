import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
<<<<<<< HEAD
import { UsuarioController } from "../controller/usuario.controller";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";



@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
=======
import { UsuarioController } from "../controllers/usuario.controller";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Module({
    imports :[TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService],
    controllers:[UsuarioController],
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    exports: [TypeOrmModule]

})
export class UsuarioModule{}