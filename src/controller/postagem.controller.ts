import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Postagem } from "src/postagem/entities/postagem.entity"
import { PostagemService } from "src/service/postagem.service"

@Controller('/postagem')
export class PostagemController{
    constructor(
        private readonly service: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.service.findAll()
    }

    @Get('/:id') //Passar o caminho de produto/id
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
        return this.service.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao')descricao: string): Promise<Postagem[]>{
        return this.service.findByDescricao(descricao)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.service.create(postagem)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    Date(@Body() postagem: Postagem): Promise<Postagem>{
        return this.service.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}