import { getCustomRepository } from "typeorm" 
import Time from "../models/Time"
import { UsuariosRepo } from "../repositories/UsuariosRepo"

interface IUsuarioRepo{
    nome: string 
    email: string 
    senha: string 
    n_whatsapp: string
    time?: Time
}

class CriarUsuarioService{
    async execute({ nome, email, senha, n_whatsapp, time} : IUsuarioRepo){
        const usuariosRepo =  getCustomRepository( UsuariosRepo)

        if(!email){
            throw new Error ("O campo email é obrigatório.")
        }    
        const usuarioExiste = await usuariosRepo.findOne({
            email
        })

        if(usuarioExiste){
            throw new Error("Já existe um usuário cadastrado com esse email!")
        }

        const usuario = usuariosRepo.create({
            nome,
            email,
            senha,
            n_whatsapp,
            time
        })

        await usuariosRepo.save(usuario)

        return usuario
    }
}

export { CriarUsuarioService }