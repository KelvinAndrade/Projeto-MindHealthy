import { IsNotEmpty, MaxLength } from "class-validator";
import { Temas } from "src/temas/entities/temas.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    nome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    sobrenome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false})
    idade: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    email: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    telefone: string

    @MaxLength(255)
    @Column({nullable: false, length: 255})
    foto: string

    @MaxLength(255)
    @Column({nullable: false, length: 255})
    senha: string

    @ManyToOne(() => Temas, (Temas ) => Temas.postagem, {
        onDelete: "CASCADE"})
categoria: Temas
}