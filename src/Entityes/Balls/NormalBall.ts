import { AbstractBall } from "./Abstractball";
import {Entityes,EntityesMoviment} from '../../Utils/Interfaces/Entityes'
import {position,direction, collisionAxis} from '../../Utils/DateTypes/index';
import { LevelUtils } from "../../Utils/LevelUtils";
import { CollisionUtils } from "../../Utils/CollisionUtils";
import { NormalBlock } from "../Blocks/NormalBlock";


export class NormalBall extends AbstractBall implements Entityes,EntityesMoviment{    
    direction:direction;
    velosity:number;

    constructor(position:position,velosity:number,direction:direction){
        super(10,10,5,position);
        this.velosity = velosity;
        this.direction = direction;
    }

    updateLogic():void{
        this.verifyCollisionObjects()
        this.verifyWallsCollision();
        this.updatePosition();
    }

    remove = ():void=>{
        // Remove entitye from pool objects
        this.levelLoaderManajer.entityesPool = this.levelLoaderManajer.entityesPool.filter((entity)=>{return entity !== this});
    }

    updatePosition():void{
        this.position.positionX += this.velosity * this.direction.directionX ;
        this.position.positionY += this.velosity * this.direction.directionY ;
    }

    // run when collision
    action(entityCollision:Entityes):void{
        let direccionColision = CollisionUtils.getAxisCollision(entityCollision,this);
        this.redirect(direccionColision);
        
        // If collision on block
        if(entityCollision instanceof NormalBlock){
            entityCollision.action()
        }
    }
    
    redirect(collisionAxis:collisionAxis):void{
        collisionAxis && collisionAxis == 'x' ? this.direction.directionX *=-1:this.direction.directionY *=-1;
    }
    
    verifyCollisionObjects():void{
        //remove this element to compare colission
        let CollisionObjects = this.levelLoaderManajer.entityesPool.filter((entity)=>{return entity !== this});
        // get collision objets
        CollisionObjects = CollisionObjects.filter((entity)=>{return CollisionUtils.entityesCollide(this,entity)});
        
        //Run action for object colision
        CollisionObjects.forEach((entityCollision)=>{this.action(entityCollision)});
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

