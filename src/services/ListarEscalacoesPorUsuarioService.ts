import { getCustomRepository } from "typeorm"
import { EscalacoesRepo } from "../repositories/EscalacoesRepo"

class ListarEscalacoesPorUsuarioService{

    async execute(usuario_id: string){
        const escalacoesRepo = getCustomRepository(EscalacoesRepo)

        const escalacoes = await escalacoesRepo.find({
            where:{
                usuario_id: usuario_id
            },
            relations: ["usuario"]
        })
        
        for (var i = 0; i<escalacoes.length; i++){
            delete escalacoes[i].usuario.senha
            delete escalacoes[i].usuario.email
        }

        return escalacoes
    }
}

export { ListarEscalacoesPorUsuarioService }