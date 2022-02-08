import { Router } from "express";
import { GetJogadorController } from "../controllers/GetJogadorController";

const jogadorRouter = Router();
const getJogadorController = new GetJogadorController();

jogadorRouter.get("/", getJogadorController.getJogadores);

export { jogadorRouter };
