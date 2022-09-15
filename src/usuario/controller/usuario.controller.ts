import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Usuario } from "../entities/usuario.entity"
import { UsuarioService } from "../services/usuario.service"


@Controller('/usuario')
export class PostagemController{
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

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('descricao')descricao: string): Promise<Usuario[]>{
        return this.service.findByDescricao(descricao)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Usuario): Promise<Usuario>{
        return this.service.create(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Usuario): Promise<Usuario>{
        return this.service.update(usuario)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}