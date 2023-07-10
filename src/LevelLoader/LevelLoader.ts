import { ControlPlataform } from "./ControlPlataform";
import { Entityes} from "../Utils/Interfaces/Entityes";
import { LevelUtils } from "../Utils/LevelUtils";
import { CanvasManager } from "./Canvas";
import { RendererManager } from "./Renderer";
import { GameStatusManager } from "./GameStatus";

export class LevelLoader{
    renderManager : RendererManager
    canvasManager : CanvasManager
    gameStatusManager:GameStatusManager
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
        this.gameStatusManager = new GameStatusManager();
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

    loadOneFrame =():void=>{
        this.entityes.updateLogic();
        this.entityes.draw(this.canvasManager.getContext());

        if(this.gameStatusManager.isGameWin() || this.gameStatusManager.isGameOver()){
            this.renderManager.stopRender();
            console.log('Game is End');
        }

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
                    entitye.updateLogic();                    
                })
            }
        },
        clear:()=>{
            this.entityesPool = null;
        }
    }

}