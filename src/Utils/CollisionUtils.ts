import { collisionAxis } from "./DateTypes";
import { Entityes } from "./Interfaces/Entityes"

export class CollisionUtils{
    static getAxisCollision=(object1:Entityes,object2:Entityes):collisionAxis=>{
        if(objectCollisionFunctions.collisionBlockRight(object1,object2) ||objectCollisionFunctions.collisionBlockLeft(object1,object2)){    
            return 'x'
        }else{
            return 'y'
        }
    }

    static entityesCollide=(object1:Entityes,object2:Entityes):boolean=>{
        return (objectCollisionFunctions.collisionAxisY(object1,object2) || objectCollisionFunctions.collisionAxisX(object1,object2)) 
       // || objectCollisionFunctions.collisionBlockTop(object1,object2)||objectCollisionFunctions.collisionBlockRight(object1,object2) ||objectCollisionFunctions.collisionBlockLeft(object1,object2))
        
    }


}



const objectCollisionFunctions ={
    collisionAxisY:(object1:Entityes,object2:Entityes):boolean=>{
        return (objectCollisionFunctions.collisionBlockTop(object1,object2) || objectCollisionFunctions.collisionBlockBottom(object1,object2) ) 
    },

    collisionAxisX:(object1:Entityes,object2:Entityes):boolean=>{
        return (objectCollisionFunctions.collisionBlockRight(object1,object2) || objectCollisionFunctions.collisionBlockLeft(object1,object2) ) 
    },

    collisionBlockTop:(object1:Entityes,object2:Entityes):boolean=>{         
        return (object1.position.positionY + object1.height == object2.position.positionY) && (object1.position.positionX + object1.width >= object2.position.positionX) && (object1.position.positionX <= object2.position.positionX + object2.width)
    },

    collisionBlockBottom:(object1:Entityes,object2:Entityes):boolean=>{
        return objectCollisionFunctions.collisionBlockTop(object2,object1);
    },

    collisionBlockRight:(object1:Entityes,object2:Entityes)=>{
            return (object1.position.positionX == object2.position.positionX + object2.width) && (object1.position.positionY <= object2.position.positionY + object2.width) && ((object1.position.positionY >= object2.position.positionY)||(object1.position.positionY + object1.height > object2.position.positionY))
    },

    collisionBlockLeft:(object1:Entityes,object2:Entityes)=>{
        return objectCollisionFunctions.collisionBlockRight(object2,object1)
    }

}