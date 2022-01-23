import { getCustomRepository } from "typeorm"
import { UsuariosRepo } from "../repositories/UsuariosRepo"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAutenticaReq{
    email: string
    senha: string
}

class AutenticaUsuarioService{

    async execute({email, senha}: IAutenticaReq){
        const usuariosRepo = getCustomRepository(UsuariosRepo)
        const usuario = await usuariosRepo.findOne({
            email
        })

        if (!usuario){
            throw new Error("Não existe um usuário cadastrado nesse email.")
        }

        const senhaCorreta = await compare(senha, usuario.senha)

        if (!senhaCorreta){
            throw new Error("Email ou senha incorretos.")
        }

        const token = sign({
            nome: usuario.nome,
            email: usuario.email
        }, "96e4b97592de348e50f3745d2dfb6548",{
            subject: usuario.id,
            expiresIn: "1d"
        } 
        )

        return token
    }
}

export { AutenticaUsuarioService }