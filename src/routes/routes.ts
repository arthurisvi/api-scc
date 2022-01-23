import { Router } from "express"
import { usuarioRouter } from "../routes/usuarios.routes"

const routes = Router()

routes.use('/usuarios', usuarioRouter)


export { routes }