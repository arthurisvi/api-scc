import { EntityRepository, Repository} from "typeorm"
import { Usuario } from "../models/Usuario"

@EntityRepository(Usuario)
class UsuariosRepo extends Repository<Usuario> {
    

}

export { UsuariosRepo }