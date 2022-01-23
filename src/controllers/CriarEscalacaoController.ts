import { Request, Response } from "express"
import { CriarEscalacaoService } from "../services/CriarEscalacaoService"

class CriarEscalacaoController{

    async handle(req: Request, res: Response){
        const criarEscalacaoService = new CriarEscalacaoService()
        const {jogadores, rodada, usuario_id} = req.body

        const escalacao = await criarEscalacaoService.execute({ jogadores, rodada, usuario_id })

        return res.json(escalacao)
    }
}

export { CriarEscalacaoController }