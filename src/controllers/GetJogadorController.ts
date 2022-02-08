import axios from "axios";
import { Request, Response } from "express";
import { CriarJogadorService } from "../services/CriarJogadorService";

class GetJogadorController {
  async getJogadores(req: Request, res: Response) {
    const criarJogadorService = new CriarJogadorService();

    try {
      const {
        data: { response },
      } = await axios.get("https://api-football-v1.p.rapidapi.com/v3/players", {
        params: {
          league: "71",
          season: "2022",
          page: "2",
        },
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "eee990d23bmsh404e0664b8de1a2p1338cdjsnbb5cbeb5e517",
        },
      });

      return res.json(response);
      // return data.response;
      // const jogador = await criarJogadorService.execute()
    } catch (error) {
      return error;
    }
  }
}

export { GetJogadorController };
