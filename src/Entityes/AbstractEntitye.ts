// Import datetypes
import {position} from '../Utils/DateTypes/index'

export class AbstractEntityes{
    height:number;
    width:number;
    position:position;

    constructor(width:number,height:number,position:position){
        this.width = width;
        this.height = height;
        this.position = position;
    }

}