import { Router } from "express"
import { usuarioRouter } from "../routes/usuarios.routes"
import { escalacaoRouter } from "../routes/escalacoes.routes"

const routes = Router()

routes.use('/usuarios', usuarioRouter)
routes.use('/escalacoes', escalacaoRouter)

export { routes }