import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Usuario } from "../entities/usuario.entity"
import { UsuarioService } from "../services/usuario.service"


@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly service: UsuarioService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.service.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Usuario[]>{
        return this.service.findByNome(nome)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.service.create(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.service.update(usuario)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}