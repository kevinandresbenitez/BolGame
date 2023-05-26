import { Entityes } from "../../Utils/Interfaces/Entityes";
import { AbstractBlock } from "./AbstractBlock"

export class NormalBlock extends AbstractBlock implements Entityes{

    action(){
        this.remove()
    }

}