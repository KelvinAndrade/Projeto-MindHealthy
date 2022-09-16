import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Temas } from "../entities/temas.entity";

@Injectable()
export class TemasService {
    constructor(
        @InjectRepository(Temas)//Vai injetar um repositorio pegando temas como entidade
        private temasRepository: Repository<Temas>//Esta guardando esse repositório temas 
    ) { }

    async findAll(): Promise<Temas[]> {
        return this.temasRepository.find({
            relations: {
                postagem: true
            }
        })
    }

    async findById(id: number): Promise<Temas> {
        let temas = await this.temasRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true

            }
        })

        if (!temas)//Se temas for vazia
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return temas
    }

    async findByTema(temas: string): Promise<Temas[]> {
        return this.temasRepository.find({
            where: {
                temas: ILike(`%${temas}%`)
            },
            relations: {
                postagem: true

            }
        })
    }

    async create(temas: Temas): Promise<Temas> {
        return this.temasRepository.save(temas)
    }

    async update(temas: Temas): Promise<Temas> {
        let temasUpdate = await this.findById(temas.id)

        if (!temasUpdate || !temas.id)
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return this.temasRepository.save(temas)
    }

    async delete(id: number): Promise<DeleteResult> {

        let temasDelete = await this.findById(id)

        if (!temasDelete)
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return this.temasRepository.delete(id)
    }
}