import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemasController } from "../controllers/temas.controller";
import { Temas } from "../entities/temas.entity";
<<<<<<< HEAD
import { TemasService } from "../service/temas.service";
=======
import { TemasService } from "../services/temas.service";
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381


@Module({
    imports: [TypeOrmModule.forFeature([Temas])],
    providers: [TemasService],
    controllers: [TemasController],
    exports: [TypeOrmModule]

})
export class TemasModule{}