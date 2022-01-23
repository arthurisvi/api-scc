import { Router } from "express"
import { AutenticaUsuarioController } from "../controllers/AutenticaUsuarioController"

const loginRouter = Router()
const autenticaUsuarioController = new AutenticaUsuarioController()

loginRouter.post("/", autenticaUsuarioController.handle)

export { loginRouter }