import { Router } from "express"
import { usuarioRouter } from "../routes/usuarios.routes"
import { escalacaoRouter } from "../routes/escalacoes.routes"
import { loginRouter } from "./login.routes"

const routes = Router()

routes.use('/usuarios', usuarioRouter)
routes.use('/escalacoes', escalacaoRouter)
routes.use('/login', loginRouter)
routes.use('/usuario/escalacoes', escalacaoRouter)

export { routes }