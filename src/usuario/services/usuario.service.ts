<<<<<<< HEAD
import { Injectable, HttpException, HttpStatus } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, ILike, DeleteResult } from "typeorm"
import { Usuario } from "../entities/usuario.entity"

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)//Vai injetar um repositorio pegando usuario como entidade
        private usuarioRepository: Repository<Usuario>//Esta guardando esse repositório usuario 
=======
import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteResult, ILike, Repository } from "typeorm"
import { Usuario } from "../entities/usuario.entity"


@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario> 
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    ){}

    async findAll(): Promise<Usuario[]>{
        return this.usuarioRepository.find({
            relations: {
<<<<<<< HEAD
                temas : true
             
         }
        })
    }
=======
                postagem : true
         }
        })
    }

>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    async findById(id: number): Promise<Usuario>{
        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
<<<<<<< HEAD
                temas: true
             
         }
        })

        if (!usuario)//Se usuario for vazia
            throw new HttpException('Usuario não foi encontrada', HttpStatus.NOT_FOUND)
=======
                postagem: true
            }
        })

        if (!usuario)
            throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381

        return usuario
        }

<<<<<<< HEAD
    async findByUsuario(usuario: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where:{
            usuario: ILike(`%${usuario}%`)
            },
            relations: {
                temas : true
             
         }
=======
    async findByNome(nome: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where:{
            nome: ILike(`%${nome}%`)
            },
            relations: {
                postagem : true
            }
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
        })
    }

    async create(usuario: Usuario): Promise<Usuario>{
        return this.usuarioRepository.save(usuario)
    }

    async update(usuario: Usuario): Promise<Usuario>{
        let usuarioUpdate = await this.findById(usuario.id)

       if (!usuarioUpdate || !usuario.id)
<<<<<<< HEAD
        throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<DeleteResult>{

=======
            throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

            return this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<DeleteResult>{
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
        let usuarioDelete = await this.findById(id)

        if (!usuarioDelete)
            throw new HttpException('Usuario não foi encontrado', HttpStatus.NOT_FOUND)

<<<<<<< HEAD
        return this.usuarioRepository.delete(id)
=======
            return this.usuarioRepository.delete(id)
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    }
}