<<<<<<< HEAD
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity({ name: 'tb_usuario' })
export class Usuario {
    [x: string]: any;

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({ nullable: false, length: 255 })
=======
import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
    @IsNotEmpty()
    @MaxLength(255)
    nome: string

<<<<<<< HEAD
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    sobrenome: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({ nullable: false})
    idade: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    email: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    telefone: string

    @ApiProperty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    foto: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    senha: string

    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem, (Postagem) => Postagem.usuario)
    postagem: Postagem[]

=======
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

    @OneToMany(()=> Postagem,(Postagem)=> Postagem.usuario,)

    postagem:Postagem[]
>>>>>>> 07dc4050e9c0813a43b1456cd633843d4d007381
}