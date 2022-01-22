import { EntityRepository, Repository} from "typeorm"
import Time from "../models/Time";

@EntityRepository(Time)
class TimesRepo extends Repository<Time>{
    
}

export { TimesRepo }