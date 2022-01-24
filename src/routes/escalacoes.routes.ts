import { Router } from "express"
import { CriarEscalacaoController } from "../controllers/CriarEscalacaoController"
import { ListarEscalacoesPorUsuarioController } from "../controllers/ListarEscalacoesPorUsuarioController"
import { verificaAutenticacao } from "../middlewares/VerificaAutenticacao"

const escalacaoRouter = Router()
const criarEscalacaoController = new CriarEscalacaoController()
const listarEscalacoesPorUsuario = new ListarEscalacoesPorUsuarioController()

escalacaoRouter.post("/", verificaAutenticacao, criarEscalacaoController.handle)
escalacaoRouter.get("/", verificaAutenticacao, listarEscalacoesPorUsuario.handle)

export { escalacaoRouter }