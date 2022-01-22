import { getCustomRepository } from "typeorm" 
import { UsuariosRepo } from "../repositories/UsuariosRepo"

interface IUsuarioRepo{
    nome: string 
    email: string 
    senha: string 
    n_whatsapp: string
    nome_time: string
}

class CriarUsuarioService{
    async execute({ nome, email, senha, n_whatsapp, nome_time} : IUsuarioRepo){
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
            nome_time
        })

        await usuariosRepo.save(usuario)

        return usuario
    }
}

export { CriarUsuarioService }