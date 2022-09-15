import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_temas' })
export class Temas {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    tema: string

    @OneToMany(() => Postagem, (Postagem) => Postagem.temas)

    postagem: Postagem[]
}