import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm"
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

    @Column()
    usuario_id: string

    @JoinColumn({name: "usuario_id"})
    @ManyToOne(type => Usuario, escalacoes => Escalacao)
    usuario: Usuario

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Escalacao }