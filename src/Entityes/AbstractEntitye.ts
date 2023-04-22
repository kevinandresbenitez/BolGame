// Import datetypes
import {position} from '../Utils/DateTypes/index'

export class AbstractEntityes{
    canUpdateLogic:boolean;
    height:number;
    width:number;
    position:position;

    constructor(canUpdateLogic:boolean,width:number,height:number,position:position){
        this.canUpdateLogic = canUpdateLogic ;
        this.width = width;
        this.height = height;
        this.position = position;
    }

}