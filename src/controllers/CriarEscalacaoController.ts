import { Request, Response } from "express"
import { CriarEscalacaoService } from "../services/CriarEscalacaoService"

class CriarEscalacaoController{

    async handle(req: Request, res: Response){
        const criarEscalacaoService = new CriarEscalacaoService()
        const {jogadores, rodada} = req.body
        // const {usuario} -- jwt / localstorage

        const escalacao = await criarEscalacaoService.execute({ jogadores, rodada })

        return res.json(escalacao)
    }
}

export { CriarEscalacaoController }