import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Postagem } from "../entities/postagem.entity"
import { PostagemService } from "../services/postagem.service"


@ApiTags('Postagem')
@Controller('/postagem')
export class PostagemController{
    constructor(private readonly service: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.service.findAll()
    }

    @Get('/:id')
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
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.service.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}//check