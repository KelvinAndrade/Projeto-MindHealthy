import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Temas } from "src/temas/entities/temas.entity"
import { Usuario } from "src/usuario/entities/usuario.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"



@Entity({ name: 'tb_postagem' })
export class Postagem {

    @ApiProperty()

    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({ nullable: false, length: 255 })
    @IsNotEmpty()
    @MaxLength(255)
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    descricao: string

    @ApiProperty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    imagem: string

    @ApiProperty({ type: () => Temas })
    @ManyToOne(() => Temas, (Temas) => Temas.postagem, {
        onDelete: "CASCADE"
    })
    temas: Temas


    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}//check