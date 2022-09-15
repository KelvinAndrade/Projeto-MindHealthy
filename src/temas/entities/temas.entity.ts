import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_temas'})
export class Temas {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    saudemental: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    lives: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    controledeansiedade: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    grupodeapoio: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    consultas: string

    @OneToMany(()=> Postagem,(Postagem)=> Postagem.temas)

temas:Postagem[]}