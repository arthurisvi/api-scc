import Time from "../models/Time";
import { UsuariosRepo } from "../repositories/UsuariosRepo";
import { sha1 } from 'sha1'

interface IUsuarioRepo{
    nome: string 
    email: string 
    senha: string 
    n_whatsapp: string
    time?: Time
}

class CriarUsuarioService{
    async execute({ nome, email, senha, n_whatsapp, time} : IUsuarioRepo){
        const usuariosRepo =  new UsuariosRepo();

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
            senha: sha1(senha),
            n_whatsapp,
            time
        })

        await usuariosRepo.save(usuario)

        return usuario
    }
}

export { CriarUsuarioService }