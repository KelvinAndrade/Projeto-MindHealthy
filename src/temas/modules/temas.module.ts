import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Temas } from "../entities/temas.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Temas])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]

})
export class TemasModule{}