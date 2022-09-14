import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { async } from "rxjs";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class PostagemService{
    findByNome(nome: string): Promise<Postagem[]> {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(Postagem)
         private postagemRepository: Repository <Postagem>
    
    ){}

    async findAll(): Promise <Postagem[]> {
        return this.postagemRepository.find()
    }

    async findById(id: number): Promise <Postagem>{
        let postagem = await this.postagemRepository.findOne({
          where:{
            id
          }  
        })

        if(!postagem)
            throw new HttpException('Postagem não foi encontrada', HttpStatus.NOT_FOUND)
            return postagem
    }

    async findByTitulo(titulo: string): Promise <Postagem[]>{
        return this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
        })
    }

    async findByDescricao(descricao: string): Promise <Postagem[]>{
        return this.postagemRepository.find({
            where:{
                descricao: ILike(`%${descricao}%`)
            }
        })
    }

    async create(postagem:Postagem): Promise <Postagem>{
        return this.postagemRepository.save(postagem)
    }

    async update(postagem:Postagem): Promise <Postagem>{
        let postagemUpdate = await this.findById(postagem.id)
        if(!postagemUpdate || !postagem.id)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
            return this.postagemRepository.save(postagem)
    }

    async delete(id: number): Promise <DeleteResult>{
        let postagemDelete = await this.findById(id)
        if(!postagemDelete)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
            return this.postagemRepository.delete(id)
    }
}
