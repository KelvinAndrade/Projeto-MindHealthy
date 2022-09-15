import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteResult, ILike, Repository } from "typeorm"
import { Usuario } from "../controller/usuario.controller"

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario> 
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

        if (!usuario)
            throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

        return usuario
        }

    async findByDescricao(descricao: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where:{
            descricao: ILike(`%${descricao}%`)
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