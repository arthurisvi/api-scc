import { Router } from "express"
import { CriarEscalacaoController } from "../controllers/CriarEscalacaoController"

const escalacaoRouter = Router()
const criarEscalacaoController = new CriarEscalacaoController()

escalacaoRouter.post("/", criarEscalacaoController.handle)

export { escalacaoRouter }