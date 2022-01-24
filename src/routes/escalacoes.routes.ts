import { Router } from "express"
import { CriarEscalacaoController } from "../controllers/CriarEscalacaoController"
import { verificaAutenticacao } from "../middlewares/VerificaAutenticacao"

const escalacaoRouter = Router()
const criarEscalacaoController = new CriarEscalacaoController()

escalacaoRouter.post("/", verificaAutenticacao, criarEscalacaoController.handle)

export { escalacaoRouter }