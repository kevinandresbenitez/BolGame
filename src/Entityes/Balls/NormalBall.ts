import { AbstractBall } from "./Abstractball";
import {Entityes} from '../../Utils/Interfaces/Entityes'
import {position,direction, collisionAxis} from '../../Utils/DateTypes/index';
import { CollisionUtils } from "../../Utils/CollisionUtils";
import { NormalBlock } from "../Blocks/NormalBlock";


export class NormalBall extends AbstractBall implements Entityes{    
    
    constructor(position:position,velosity:number,direction:direction){
        super(10,10,5,position,direction,velosity);
    }

    updateLogic():void{
        this.verifyObjectsCollision()
        this.verifyWallsCollision();
        this.updatePosition();
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
    
    
    verifyObjectsCollision():void{
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

