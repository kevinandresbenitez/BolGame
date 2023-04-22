
import { LevelLoader } from "../LevelLoader";
export class RendererManager{
    levelLoaderManager:LevelLoader;
    isRunFrame:boolean;
    RequestAnimationFrame:any;

    constructor(){
        this.levelLoaderManager = new LevelLoader();
    }

    stopRender = ()=>{
        if(this.RenderFrames){
            window.cancelAnimationFrame(this.RequestAnimationFrame);
            this.RequestAnimationFrame = false;
            this.isRunFrame = false;
        }
    }
    startRender = ()=>{
        if(!this.isRunFrame){
            this.RequestAnimationFrame = window.requestAnimationFrame(this.RenderFrames);
            this.isRunFrame = true;
        }
    }

    RenderFrames = ()=>{
        this.levelLoaderManager.entityes.updateLogic();
        this.levelLoaderManager.entityes.draw(this.levelLoaderManager.canvasManager.getContext());
        this.RequestAnimationFrame = window.requestAnimationFrame(this.RenderFrames);
    }

}