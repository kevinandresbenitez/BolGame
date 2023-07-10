import { position } from "../../Utils/DateTypes";
import { AbstractEntityes } from "../AbstractEntitye";


export class AbstractBlock extends AbstractEntityes{

    constructor(position:position){
        super(50,50,position);
    }

    draw(context:CanvasRenderingContext2D):void{
        context.beginPath();
        context.rect(this.position.positionX,this.position.positionY,this.width,this.height);
        context.stroke();
    }


    updateLogic(){}
}