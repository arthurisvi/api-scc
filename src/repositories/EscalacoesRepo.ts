import { EntityRepository, Repository} from "typeorm"
import { Escalacao } from "../models/Escalacao"

@EntityRepository(Escalacao)
class EscalacoesRepo extends Repository<Escalacao> {
}

export { EscalacoesRepo }