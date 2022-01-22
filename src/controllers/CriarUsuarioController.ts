import { Request, Response } from "express"
import { CriarUsuarioService } from "../services/CriarUsuarioService";

class CriarUsuarioController{

    async handle(req: Request, res: Response){
        const { nome, email, senha, n_whatsapp } = req.body

        const criarUsuarioService = new CriarUsuarioService();

        const usuario = await criarUsuarioService.execute({ nome, email, senha, n_whatsapp })

        return res.json(usuario)
    }
}

export { CriarUsuarioController }