import { AbstractBall } from "./Abstractball";
import {Entityes} from '../../Utils/Interfaces/Entityes'
import {position,direction, collisionAxis} from '../../Utils/DateTypes/index';


export class NormalBall extends AbstractBall implements Entityes{
    collisionObjects:Array<Entityes>
    haveCollision:boolean
    
    constructor(position:position,velosity:number,direction:direction){
        super(150,150,5,position,velosity,direction);
    }

    updateLogic():void{
        this.updateCollisionableEntityes() // Set collosion objets in collisionObjects
        this.verifyWallsCollision();
        this.updatePosition();
        if(this.haveCollision){
            for(var i=0;i < this.collisionObjects.length;i++){
                this.action(this.collisionObjects[i]);
            }
        }
    }

    remove = ():void=>{
        // Remove entitye from pool objects
        this.levelLoaderManajer.entityesPool = this.levelLoaderManajer.entityesPool.filter((entity)=>{return entity !== this})
    }

    updatePosition():void{
        this.position.positionX += this.velosity * this.direction.directionX ;
        this.position.positionY += this.velosity * this.direction.directionY ;
    }

    // run when collision
    action(entityCollision:Entityes):void{
        // this.redirect();
    }
    
    redirect(collisionAxis:collisionAxis):void{
        collisionAxis && collisionAxis == 'x' ? this.direction.directionX *=-1:this.direction.directionY *=-1;
    }
    
    updateCollisionableEntityes():void{
        
    }

    verifyWallsCollision():void{
        let widthCanvas = this.levelLoaderManajer.canvasManager.CanvasDomElement.width;
        let heighCanvas = this.levelLoaderManajer.canvasManager.CanvasDomElement.height;
        // Redirect wallls
        if(this.position.positionX <= 0 || this.position.positionX + this.radius >= widthCanvas){
            this.redirect('x')
        }
        // Redirect wallls
        if(this.position.positionY <= 0 || this.position.positionY + this.radius >= heighCanvas){
            this.redirect('y')
        }
    }
}

