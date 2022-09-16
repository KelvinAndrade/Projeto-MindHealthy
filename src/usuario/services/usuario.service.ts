import { Injectable, HttpException, HttpStatus } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, ILike, DeleteResult } from "typeorm"
import { Usuario } from "../entities/usuario.entity"

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)//Vai injetar um repositorio pegando usuario como entidade
        private usuarioRepository: Repository<Usuario>//Esta guardando esse repositório usuario 
    ){}

    async findAll(): Promise<Usuario[]>{
        return this.usuarioRepository.find({
            relations: {
                temas : true
             
         }
        })
    }
    async findById(id: number): Promise<Usuario>{
        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
                temas: true
             
         }
        })

        if (!usuario)//Se usuario for vazia
            throw new HttpException('Usuario não foi encontrada', HttpStatus.NOT_FOUND)

        return usuario
        }

    async findByUsuario(usuario: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where:{
            usuario: ILike(`%${usuario}%`)
            },
            relations: {
                temas : true
             
         }
        })
    }

    async create(usuario: Usuario): Promise<Usuario>{
        return this.usuarioRepository.save(usuario)
    }

    async update(usuario: Usuario): Promise<Usuario>{
        let usuarioUpdate = await this.findById(usuario.id)

       if (!usuarioUpdate || !usuario.id)
        throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<DeleteResult>{

        let usuarioDelete = await this.findById(id)

        if (!usuarioDelete)
            throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.delete(id)
    }
}