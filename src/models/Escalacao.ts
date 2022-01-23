import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"
import { Usuario } from "./Usuario"

@Entity("escalacoes")
class Escalacao{

    @PrimaryColumn()
    readonly id: string

    @Column("text", {array: true})
    jogadores: string[]
    
    @Column()
    rodada: number

    @ManyToOne(type => Usuario, escalacoes => Escalacao)
    usuario: Usuario

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Escalacao }