import { EntityRepository, Repository } from "typeorm";
import { Jogador } from "../models/Jogador";

@EntityRepository(Jogador)
class JogadoresRepo extends Repository<Jogador> {}

export { JogadoresRepo };
