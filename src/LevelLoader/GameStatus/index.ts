import { AbstractBall } from "../../Entityes/Balls/Abstractball";
import { AbstractBlock } from "../../Entityes/Blocks/AbstractBlock";
import { LevelLoader } from "../LevelLoader";
export class GameStatusManager{
    levelLoaderManager:LevelLoader;

    constructor(){
        this.levelLoaderManager = new LevelLoader();
    }

    isGameOver():boolean{
        return (this.levelLoaderManager.entityesPool.filter((entity:any)=>{return entity instanceof AbstractBall}).length == 0)
    }

    isGameWin():boolean{
        return (this.levelLoaderManager.entityesPool.filter((entity:any)=>{return entity instanceof AbstractBlock}).length == 0)
    }

}
