// Import datetypes
import {direction,position} from '../../Utils/DateTypes/index'
import {AbstractEntityes} from '../AbstractEntitye'
import { LevelLoader } from '../../LevelLoader/LevelLoader';

export class AbstractBall extends AbstractEntityes{
    direction:direction;
    velosity:number;
    radius:number;
    levelLoaderManajer:LevelLoader

    constructor(width:number,height:number,radius:number,position:position,velosity:number,direction:direction){
        super(true,width,height,position);
        this.radius = radius;
        this.velosity = velosity;
        this.direction = direction;
        this.levelLoaderManajer = new LevelLoader();
    }


    draw(CanvasContext:CanvasRenderingContext2D):void{
        // need conect canvas
        CanvasContext.beginPath()
        CanvasContext.arc(this.position.positionX,this.position.positionY,this.radius,0,Math.PI * 2);
        CanvasContext.fillStyle = "#FFCC80";
        CanvasContext.fill();
    }

    remove():void{
        // Defined in class
    }
}