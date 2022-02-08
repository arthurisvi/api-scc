import { getCustomRepository } from "typeorm";
import { JogadoresRepo } from "../repositories/JogadoresRepo";

interface IJogadorService {
  jogador_id: number;
  nome: string;
  clube: string;
  posicao: string;
  foto: string;
}

class CriarJogadorService {
  async execute({ jogador_id, nome, clube, posicao, foto }: IJogadorService) {
    const jogadoresRepo = getCustomRepository(JogadoresRepo);

    const jogadorInserido = await jogadoresRepo.findOne({ jogador_id });

    if (jogadorInserido) {
      throw new Error(
        "Não é possível inserir esse jogador no banco, pois ele já existe!"
      );
    }

    const jogador = jogadoresRepo.create({
      jogador_id,
      nome,
      clube,
      posicao,
      foto,
    });

    await jogadoresRepo.save(jogador);

    return jogador;
  }
}

export { CriarJogadorService };
