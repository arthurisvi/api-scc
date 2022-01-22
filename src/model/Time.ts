import {Entity, PrimaryColumn, Column} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("times")
export default class Time{
    @PrimaryColumn()
    readonly id: string
    
    @Column()
    nome_time: string
    
    @Column()
    escudo: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

