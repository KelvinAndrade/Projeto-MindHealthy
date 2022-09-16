import { IsNotEmpty, MaxLength } from "class-validator";
import { Temas } from "src/temas/entities/temas.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({ name: 'tb_postagem' })
export class Postagem {
  
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, length: 255 })
    @IsNotEmpty()
    @MaxLength(255)
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    descricao: string

    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    imagem: string

    @ManyToOne(() => Temas, (Temas) => Temas.postagem, {
        onDelete: "CASCADE"
    })
    temas: Temas

    @ManyToOne(() => Usuario, (Usuario) => Usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}