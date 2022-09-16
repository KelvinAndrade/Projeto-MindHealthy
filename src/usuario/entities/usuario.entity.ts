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
    @IsNotEmpty()
    @MaxLength(255)
    nome: string

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

}