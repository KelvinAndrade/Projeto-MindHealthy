import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Temas } from "../entities/temas.entity"
import { TemasService } from "../services/temas.services"
@Controller('/temas')
export class TemasController{
    constructor(private readonly service: TemasService){}

    @Get()//Mapeando o Get no controller
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findAll(): Promise<Temas[]>{
        return this.service.findAll()//Busca tudo dentro do banco
    }

    @Get('/:id')//Passar o caminho de temas/id
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Temas>{//Esperando um Id, que vai ser do tipo inteiro
        return this.service.findById(id)//Buscando um Id
    }

    @Get('/tema/:temas')//tema/temas/l
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findByTema(@Param('tema')temas: string): Promise<Temas[]>{
        return this.service.findByTema(temas)
    } 

    @Post()//Post Salva no DB
    @HttpCode(HttpStatus.CREATED)
    create(@Body() temas: Temas): Promise<Temas>{
        return this.service.create(temas)
    }

    @Put()//Atualiza no DB
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