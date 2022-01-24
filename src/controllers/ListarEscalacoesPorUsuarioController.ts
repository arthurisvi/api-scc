import { Request, Response } from "express"
import { ListarEscalacoesPorUsuarioService } from "../services/ListarEscalacoesPorUsuarioService"

class ListarEscalacoesPorUsuarioController{

    async handle(req: Request, res: Response){
        const { usuario_id } = req

        const listarEscalacoesPorUsuario = new ListarEscalacoesPorUsuarioService()

        const escalacoes = await listarEscalacoesPorUsuario.execute(usuario_id)

        return res.json(escalacoes)
    }
}

export { ListarEscalacoesPorUsuarioController }