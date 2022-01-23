import { getCustomRepository } from "typeorm" 
import { Usuario } from "../models/Usuario";
import { EscalacoesRepo } from "../repositories/EscalacoesRepo";

interface IEscalacaoService{
    jogadores: string []
    rodada: number
    // usuario: Usuario
}

class CriarEscalacaoService{
    async execute({jogadores, rodada/*, usuario*/}: IEscalacaoService){
        const escalacoesRepo = getCustomRepository (EscalacoesRepo)

        console.log(jogadores)
        console.log(rodada)
        if (!jogadores){
            throw new Error("Algo de errado ocorreu na escalação!")
        }

        const escalacao = escalacoesRepo.create({
            jogadores,
            rodada
            // usuario
        })

        await escalacoesRepo.save(escalacao)

        return escalacao
    }
}


export { CriarEscalacaoService }