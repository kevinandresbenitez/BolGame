// Import datetypes
import {direction,position} from '../../Utils/DateTypes/index'
import {AbstractEntityes} from '../AbstractEntitye'
import { LevelLoader } from '../../LevelLoader/LevelLoader';
import { collisionAxis } from '../../Utils/DateTypes/index';

export class AbstractBall extends AbstractEntityes{    
    radius:number;
    direction:direction
    levelLoaderManajer:LevelLoader;
    velosity:number;

    constructor(width:number,height:number,radius:number,position:position,direction:direction,velosity:number){
        super(width,height,position);
        this.radius = radius;
        this.direction = direction;
        this.velosity = velosity;
        this.levelLoaderManajer = new LevelLoader();
    }


    draw(CanvasContext:CanvasRenderingContext2D):void{
        // need conect canvas
        CanvasContext.beginPath()
        CanvasContext.arc(this.position.positionX,this.position.positionY,this.radius,0,Math.PI * 2);
        CanvasContext.fillStyle = "#FFCC80";
        CanvasContext.fill();
    }

    redirect(collisionAxis:collisionAxis):void{
        collisionAxis && collisionAxis == 'x' ? this.direction.directionX *=-1:this.direction.directionY *=-1;
    }

    updatePosition():void{
        this.position.positionX += this.velosity * this.direction.directionX ;
        this.position.positionY += this.velosity * this.direction.directionY ;
    }
}