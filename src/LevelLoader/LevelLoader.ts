import { ControlPlataform } from "./ControlPlataform";
import { Entityes } from "../Utils/Interfaces/Entityes";
import { LevelUtils } from "../Utils/LevelUtils";
import { CanvasManager } from "./Canvas";
import { RendererManager } from "./Renderer";
import { NormalBall } from "../Entityes/Balls/NormalBall";

export class LevelLoader{
    renderManager : RendererManager
    canvasManager : CanvasManager
    controlPlataform:ControlPlataform
    entityesPool:Array<Entityes>
    levelNumber : number

    static instance:LevelLoader;
    constructor(){
        if(LevelLoader.instance){
            return LevelLoader.instance
        }
        // enable static instance
        LevelLoader.instance = this;

        // Set managers
        this.renderManager = new RendererManager();
        this.canvasManager = new CanvasManager();
    }

    loadLevel = (level:number):void=>{
        if(!LevelUtils.isLevelNumber(level)){
            throw new Error('Failed loading level number');
        }

        // get entityes for level 
        this.entityesPool = LevelUtils.getForLevel.entityes.all(level);
        this.controlPlataform = new ControlPlataform();
        this.controlPlataform.enable();
        
        this.canvasManager.create();
        this.renderManager.startRender();
    }

    entityes = {
        draw:(context:CanvasRenderingContext2D)=>{
            this.canvasManager.clearCanvas()

            if(this.entityesPool){
                this.entityesPool.forEach((entitye:Entityes)=>{
                    entitye.draw(context);
                })
            }
        },
        updateLogic:()=>{
            if(this.entityesPool){
                this.entityesPool.forEach((entitye:Entityes)=>{
                    if(entitye.canUpdateLogic){
                        entitye.updateLogic();
                    }
                })
            }
        },
        clear:()=>{
            this.entityesPool = null;
        }
    }

}