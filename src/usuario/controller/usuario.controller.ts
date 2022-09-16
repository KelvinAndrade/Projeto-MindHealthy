import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Usuario } from "../entities/usuario.entity"
import { UsuarioService } from "../services/usuario.service"

@ApiTags('Usuários')
@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly service: UsuarioService){}

    @Get()//Mapeando o Get no controller
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findAll(): Promise<Usuario[]>{
        return this.service.findAll()//Busca tudo dentro do banco
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{//Esperando um Id, que vai ser do tipo inteiro
        return this.service.findById(id)//Buscando um Id
    }

    @Get('/usuario/:usuario')
    @HttpCode(HttpStatus.OK)//Retorna um status se der certo o Get ele retorna Ok
    findByUsuario(@Param('usuario')usuario: string): Promise<Usuario[]>{
        return this.service.findByUsuario(usuario)
    } 

    @Post()//Post Salva no DB
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.service.create(usuario)
    }

    @Put()//Atualiza no DB
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