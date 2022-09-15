import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    nome: string

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    sobrenome: string

    @Column({nullable: false})
    @IsNotEmpty()
    idade: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    email: string

    @Column({nullable: false})
    @IsNotEmpty()
    telefone: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    fotoPerfil: string

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    senha: string

    @OneToMany(()=> Postagem,(Postagem)=> Postagem.usuario)

    usuraio:Postagem[]
}
