import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm"
import { v4 as uuid } from "uuid"
import bcrypt from 'bcryptjs'
import { Escalacao } from "./Escalacao"

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

    @Column()
    nome_time: string

    @OneToMany(() => Escalacao, escalacao => escalacao.usuario)
    escalacoes: Escalacao[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

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