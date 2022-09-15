import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Temas } from "../entities/temas.entity";

@Injectable()
export class TemasService {
    constructor(
        @InjectRepository(Temas)//Vai injetar um repositorio pegando temass como entidade
        private temassRepository: Repository<Temas>//Esta guardando esse repositório temass 
    ) { }

    async findAll(): Promise<Temas[]> {
        return this.temassRepository.find({
            relations: {
                postagem: true
            }
        })
    }

    async findById(id: number): Promise<Temas> {
        let temass = await this.temassRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true

            }
        })

        if (!temass)//Se temass for vazia
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return temass
    }

    async findByTema(temas: string): Promise<Temas[]> {
        return this.temassRepository.find({
            where: {
                temas: ILike(`%${temas}%`)
            },
            relations: {
                postagem: true

            }
        })
    }

    async create(temass: Temas): Promise<Temas> {
        return this.temassRepository.save(temass)
    }

    async update(temass: Temas): Promise<Temas> {
        let temassUpdate = await this.findById(temass.id)

        if (!temassUpdate || !temass.id)
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return this.temassRepository.save(temass)
    }

    async delete(id: number): Promise<DeleteResult> {

        let temassDelete = await this.findById(id)

        if (!temassDelete)
            throw new HttpException('Tema não foi encontrado', HttpStatus.NOT_FOUND)

        return this.temassRepository.delete(id)
    }
}