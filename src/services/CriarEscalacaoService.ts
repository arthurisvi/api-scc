import { getCustomRepository } from "typeorm" 
import { Usuario } from "../models/Usuario";
import { EscalacoesRepo } from "../repositories/EscalacoesRepo";

interface IEscalacaoService{
    jogadores: string []
    rodada: number
    usuario_id: string
}

class CriarEscalacaoService{
    async execute({jogadores, rodada, usuario_id}: IEscalacaoService){
        const escalacoesRepo = getCustomRepository (EscalacoesRepo)
        

        if (!jogadores){
            throw new Error("Algo de errado ocorreu na escalação!")
        }
 
        const escalacao = escalacoesRepo.create({
            jogadores,
            rodada,
            usuario_id
        })

        await escalacoesRepo.save(escalacao)

        return escalacao
    }
}


export { CriarEscalacaoService }