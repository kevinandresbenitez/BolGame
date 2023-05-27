// Import datetypes
import {position} from '../Utils/DateTypes/index'
import { LevelLoader } from '../LevelLoader/LevelLoader';

export class AbstractEntityes{
    height:number;
    width:number;
    position:position;
    levelLoaderManajer:LevelLoader

    constructor(width:number,height:number,position:position){
        this.width = width;
        this.height = height;
        this.position = position;
        this.levelLoaderManajer = new LevelLoader();
    }

    remove = ():void=>{
        // Remove entitye from pool objects
        this.levelLoaderManajer.entityesPool = this.levelLoaderManajer.entityesPool.filter((entity:any)=>{return entity !== this});
    }

}