import { IsNotEmpty, MaxLength } from "class-validator";
import { Temas } from "src/temas/entities/temas.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_postagem'})
export class Postagem {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
    @IsNotEmpty()
    @MaxLength(255)
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    descricao: string

    @MaxLength(255)
    @Column({nullable: false, length: 255})
    imagem: string

    @ManyToOne(() => Temas, (Temas ) => Temas.postagem, {
        onDelete: "CASCADE"})
    tema: Temas
}