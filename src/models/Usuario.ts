import {Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from "typeorm"
import { v4 as uuid } from "uuid"
import Time from "./Time"
import bcrypt from 'bcryptjs'

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

    @OneToOne(type => Time, usuario => Usuario)
    @JoinColumn({ name: "id_time"})
    time: Time

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @BeforeInsert()
    @BeforeUpdate()
    criptografarSenha(){
        this.senha = bcrypt.hashSync(this.senha, 8)
    }

}

export { Usuario }