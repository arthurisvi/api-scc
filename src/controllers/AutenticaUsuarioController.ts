import { Request, Response } from "express"
import { AutenticaUsuarioService } from "../services/AutenticaUsuarioService"

class AutenticaUsuarioController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body 

        const autenticaUsuarioService = new AutenticaUsuarioService()

        const token = await autenticaUsuarioService.execute({
            email, 
            senha
        })

        return res.json(token)
    }
}

export { AutenticaUsuarioController }