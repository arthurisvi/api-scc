import { Router } from "express"
import { CriarUsuarioController } from "./controllers/CriarUsuarioController"

const router = Router()

const criarUsuarioController = new CriarUsuarioController()

router.post("/usuarios", criarUsuarioController.handle)

export { router }