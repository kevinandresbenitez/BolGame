import { ControlPlataform } from "../LevelLoader/ControlPlataform"
import { Entityes } from "./Interfaces/Entityes"
import { NormalBall } from "../Entityes/Balls/NormalBall"


export class LevelUtils { 
    static isLevelNumber = (level:number):boolean=>{ return true}

    static getForLevel = {

        entityes:{
            blocks:(level:number)=>{

            },

            balls:(level:number)=>{
                // set artificial enttyes
                let entityesesf:Entityes[] = [];

                for (let index = 0; index < 10; index++) {
                    entityesesf.push(new NormalBall({positionX:Math.random()* window.innerWidth,positionY:Math.random()* window.innerHeight},2,{directionX:(Math.pow(-1,index)*(Math.random()*10)),directionY:(Math.pow(-1,index)*(Math.random()*10))}))
                }


                return [...entityesesf]
            },

            all:(level:number):Array<Entityes>=>{ 
                return [... LevelUtils.getForLevel.entityes.balls(level)]

            }
        },
        
        controlPlataform:():ControlPlataform=>{return }


    }






}