import { position } from "../../Utils/DateTypes";
import { AbstractEntityes } from "../AbstractEntitye";
import { LevelLoader } from "../../LevelLoader/LevelLoader";

export class AbstractBlock extends AbstractEntityes{
    levelLoaderManajer:LevelLoader

    constructor(position:position){
        super(50,50,position);
        this.levelLoaderManajer = new LevelLoader();
    }

    draw(context:CanvasRenderingContext2D):void{
        context.beginPath();
        context.rect(this.position.positionX,this.position.positionY,this.width,this.height);
        context.stroke();
    }

    remove = ():void=>{
        // Remove entitye from pool objects
        this.levelLoaderManajer.entityesPool = this.levelLoaderManajer.entityesPool.filter((entity)=>{return entity !== this});
    }

    updateLogic(){}
}