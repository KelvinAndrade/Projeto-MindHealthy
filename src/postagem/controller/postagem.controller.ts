import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Postagem } from "../entities/postagem.entity"
import { PostagemService } from "../services/postagem.services"

@Controller('/postagem')
export class PostagemController{
    constructor(private readonly service: PostagemService){}

    @Get()//Mapeando o Get no controller
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findAll(): Promise<Postagem[]>{
        return this.service.findAll()//Busca tudo dentro do banco
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{//Esperando um Id, que vai ser do tipo inteiro
        return this.service.findById(id)//Buscando um Id
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findByDescricao(@Param('descricao')descricao: string): Promise<Postagem[]>{
        return this.service.findByDescricao(descricao)
    } 

    @Post()//Post Salva no DB
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.service.create(postagem)
    }

    @Put()//Atualiza no DB
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.service.update(postagem)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}
