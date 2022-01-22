import {Entity, PrimaryColumn, Column, OneToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { Usuario } from "./Usuario"

@Entity("times")
export default class Time{
    @PrimaryColumn()
    readonly id: string
    
    @Column()
    nome_time: string
    
    @Column()
    escudo: string

    @OneToOne(type => Usuario, time => Time) // specify inverse side as a second parameter
    usuario: Usuario | null

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

