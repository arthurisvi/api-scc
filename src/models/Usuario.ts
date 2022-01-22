import {Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn} from "typeorm"
import { v4 as uuid } from "uuid"
import Time from "./Time"

@Entity("usuarios")
class Usuario{
    @PrimaryColumn()
    readonly id: string
    
    @Column()
    nome: string
    
    @Column()
    email: string 
    
    @Column()
    senha: string
    
    @Column()
    n_whatsapp: string
    
    @CreateDateColumn()
    created_at: Date
    
    @OneToOne(type => Time)
    @JoinColumn({ name: "id_time"})
    time: Time

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Usuario }