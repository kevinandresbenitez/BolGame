import { ControlPlataform } from "../LevelLoader/ControlPlataform"
import { Entityes } from "./Interfaces/Entityes"
import { NormalBall } from "../Entityes/Balls/NormalBall"
import { Levels } from "../Levels"
import { NormalBlock } from "../Entityes/Blocks/NormalBlock";

export class LevelUtils { 
    static isLevelNumber = (level:number):boolean=>{
        return ((Levels.length + 1) >=  level && level >= 1)
    }

    static getForLevel = {

        entityes:{
            blocks:(level:number):Array<Entityes>=>{
                if(!LevelUtils.isLevelNumber(level)){
                    return [];
                }
                var filas = 260;

                let BlocksMatriz:Array<Entityes> = Levels[level -1].matrizBlocks.map((row)=>{
                    var Columna = 200;
                    filas +=120;
                    return row.map((item)=>{
                        let newItem;

                        if(item == 1){
                            newItem =new NormalBlock({positionX:Columna,positionY:filas});
                        }
                        Columna += 60;
                        return newItem;
                    })
                }).flat();
                return BlocksMatriz;

            },

            balls:(level:number)=>{
                // set artificial enttyes
                let entityesesf:Entityes[] = [];

                entityesesf.push(new NormalBall({positionX:300,positionY:300},1,{directionX:-5,directionY:5}))
                entityesesf.push(new NormalBall({positionX:300,positionY:600},1,{directionX:10,directionY:5}))
                entityesesf.push(new NormalBall({positionX:900,positionY:300},1,{directionX:5,directionY:5}))
                entityesesf.push(new NormalBall({positionX:300,positionY:150},1,{directionX:10,directionY:5}))
                entityesesf.push(new NormalBall({positionX:600,positionY:150},1,{directionX:5,directionY:-20}))
                


                return entityesesf
            },

            all:(level:number):Array<Entityes>=>{ 
                let blocksEntityes = LevelUtils.getForLevel.entityes.blocks(level);
                let ballsEntityes = LevelUtils.getForLevel.entityes.balls(level);
                return [...ballsEntityes,...blocksEntityes]

            }
        },
        
        controlPlataform:():ControlPlataform=>{return }


    }






}