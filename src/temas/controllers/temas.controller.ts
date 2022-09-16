import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Temas } from "../entities/temas.entity"
import { TemasService } from "../services/temas.service"
@Controller('/temas')
export class TemasController{
    constructor(private readonly service: TemasService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Temas[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Temas>{
        return this.service.findById(id)
    }

    @Get('/tema/:tema')
    @HttpCode(HttpStatus.OK)
    findByTema(@Param('tema')temas: string): Promise<Temas[]>{
        return this.service.findByTema(temas)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() temas: Temas): Promise<Temas>{
        return this.service.create(temas)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() temas: Temas): Promise<Temas>{
        return this.service.update(temas)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}