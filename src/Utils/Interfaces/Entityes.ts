import {direction,position} from '../DateTypes/index'

interface Entityes{
    position:position,
    direction:direction,
    canUpdateLogic:boolean,
    width:number,
    height:number,
    draw(CanvasContext:CanvasRenderingContext2D):void,
    remove():void,
    updateLogic():void
}

export {Entityes}